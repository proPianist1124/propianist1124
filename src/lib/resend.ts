import { Resend } from "resend"
import { PRIVATE_RESEND_KEY } from "$env/static/private"

export async function send_mail(from: string, subject: string, content: string) {
    const resend = new Resend(PRIVATE_RESEND_KEY)

    await resend.emails.send({
        from: `${from} <site@propianist1124.obl.ong>`,
        to: [ "darrenpeng01@gmail.com" ],
        subject,
        html: `<p style = "font-size: 20px;">${content}</p>`
    })
}