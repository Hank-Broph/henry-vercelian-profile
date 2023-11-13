/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9tLNq3moJrC
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-center mb-4 dark:text-white">Guest Book</h2>
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message" required />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" type="submit">
            Leave Signature
          </Button>
        </form>
      </div>
    </div>
  )
}
