import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { toast, Toaster } from "sonner"

function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsLoading(true)
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_ID
      )
      if (res) {
        toast.success('Email Send :D')
      }
    } catch (error: unknown) {
      console.error(error);
      toast.error('Error to send email :c')
    } finally {
      setIsLoading(false)
      form.current.reset()
    }
  };

  return (
    <section id='contact' className='relative w-full h-full flex flex-col justify-center items-center py-30 mx-auto z-20'>
      <h2 className="font-medium text-3xl flex justify-center items-center gap-4 pb-15"><span className="text-white/20 text-xl">&#60; h3 &#62;</span> <span className="text-white text-shadow-[0px_0px_8px] text-shadow-white">Contact</span><span className="text-white/20 text-xl">&#60;/ h3 &#62;</span></h2>

      <div className="w-full flex justify-center items-center gap-4">
        <span className="text-white/20 text-xl">&#60; form &#62;</span>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-2xl">
          <input className="border-2 border-teal-700 rounded-md p-2 px-3 font-medium" type="text" name="name" placeholder="Full Name" required />
          <input className="border-2 border-teal-700 rounded-md p-2 px-3 font-medium" type="email" name="email" placeholder="E-Mail Address" required />
          <textarea name="message" className="border-2 border-teal-700 rounded-md p-2 px-3 h-full max-h-70" rows={7} placeholder="Message" required />
          <button className="w-full bg-teal-700 py-3 rounded-md cursor-pointer hover:shadow-[0px_0px_8px] hover:shadow-teal-300 hover:bg-teal-600 transition-all font-medium" type="submit">{isLoading ? 'Sending...' : 'Send'}</button>
        </form>
        <span className="text-white/20 text-xl">&#60;/ form &#62;</span>
      </div>
      <Toaster richColors></Toaster>
    </section>
  )
}

export default Contact