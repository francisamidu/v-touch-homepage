import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          <span className="text-gray-800">STAY UPDATED WITH</span>
          <br />
          <span className="text-gray-400 outline-text text-5xl">V-TOUCH</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know about new collections, exclusive designs, and
          styling tips from our atelier.
        </p>
        <div className="flex max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="rounded-l-full border-r-0 px-6 py-3 text-gray-600"
          />
          <Button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-r-full font-medium">
            SUBSCRIBE
          </Button>
        </div>
      </div>
    </section>
  );
}
