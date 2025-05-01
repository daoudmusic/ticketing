// /lib/getEvents.ts – fetch and enrich events from Google Sheets

function parseDate(input: string): string {
  try {
    const date = new Date(input);
    if (isNaN(date.getTime())) return input;
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return input;
  }
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/\bl['eé]\s?/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractLikelyVenue(name: string): string {
  const match = name.match(/[@x:]\s*(.*)/i);
  return match ? match[1].trim() : name;
}

function inferVenue(name: string): string {
  const venueKeywords = [
    { name: "Le Bikini", match: [/bikini/i] },
    { name: "Le Metronum", match: [/metronum/i] },
    { name: "La Maroquinerie", match: [/maroquinerie/i] },
    { name: "L'Olympia", match: [/olympia/i] },
    { name: "La Cigale", match: [/cigale/i] },
    { name: "Rockstore", match: [/rockstore/i] },
    { name: "Le Rex de Toulouse", match: [/rex.*toulouse/i] },
    { name: "Paloma Nîmes", match: [/paloma/i] },
    { name: "New Morning", match: [/new morning/i] },
    { name: "La Vapeur", match: [/vapeur/i] },
    // Add more venues here as needed...
  ];

  const normalizedName = normalize(name);

  for (const venue of venueKeywords) {
    if (venue.match.some((regex) => regex.test(name))) return venue.name;
    if (normalizedName.includes(normalize(venue.name))) return venue.name;
  }
  return "TBD";
}

async function inferLocation(source: string): Promise<string> {
  const cityKeywords = [
    { city: "Toulouse", match: [/toulouse/i, /bikini/i, /metronum/i, /rex.*toulouse/i] },
    { city: "Paris", match: [/paris/i, /olympia/i, /maroquinerie/i, /boule noire/i, /cigale/i] },
    { city: "Montpellier", match: [/montpellier/i, /rockstore/i, /jam/i] },
    { city: "Nîmes", match: [/nîmes/i, /paloma/i] },
    { city: "Dijon", match: [/vapeur/i, /dijon/i] },
    // Add more cities here as needed...
  ];

  const normalizedSource = normalize(source);

  for (const city of cityKeywords) {
    if (city.match.some((regex) => regex.test(source))) return city.city;
    if (normalizedSource.includes(normalize(city.city))) return city.city;
  }

  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const venueOnly = extractLikelyVenue(source);
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
      venueOnly
    )}&inputtype=textquery&fields=formatted_address&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const address = data?.candidates?.[0]?.formatted_address;
    if (address) {
      const city = address.split(",").slice(-2)[0].trim();
      return city;
    }
  } catch (err) {
    console.error("Google Maps fallback failed:", err);
  }

  return "Unknown";
}

export async function getEvents() {
  const res = await fetch("https://opensheet.elk.sh/1tJAWqi6J5TvvVA_RRht7HLxDz5V9_AG_/Sheet1");
  const data = await res.json();

  const events = await Promise.all(
    data
      .filter((event: any) => {
        const confirmed = (event.confirmed || "").toLowerCase();
        return confirmed === "yes" || confirmed === "confirmed";
      })
      .map(async (event: any) => {
        const venue = event.venue || inferVenue(event.name);
        const location = event.location || (await inferLocation(`${venue} ${event.name}`));

        return {
          id: event.id,
          name: event.name,
          date: parseDate(event.date),
          price: Number(event.price),
          slug: event.slug,
          image: event.image || "/daoud-event-default.jpg",
          totalTickets: Number(event.totalTickets),
          ticketsSold: Number(event.ticketsSold),
          ticketsLeft: Number(event.ticketsLeft),
          venue,
          location,
          availabilityStatus: event.availabilityStatus,
        };
      })
  );

  return events;
}
