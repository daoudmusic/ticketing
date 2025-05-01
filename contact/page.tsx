import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-white text-black">
      <div className="max-w-xl mx-auto">
        <img src="/daoud-logo.svg" alt="daoud logo" className="h-12 mb-6" />
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <form className="space-y-4">
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Message" rows={6} required />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </main>
  );
}