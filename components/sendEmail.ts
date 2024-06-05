"use server";

// import {Resend} from "resend";

// const resend = new Resend("re_ENjzcJCd_5vaHdMStJ6d2if64QsEZe55o");

// export const sendEmail = async (formData: FormData) =>{

//     console.log("running");RESEND_API_KEY
//     console.log(formData.get("senderEmail"));
//     console.log(formData.get("message"));

//     resend.emails.send({
//         from: "onboarding@resend.dev",
//         to: "lima.chris97@gmail.com",
//         subject: "Message from forum",
//         text: "Let silver and steel be the essence.Let stone and the archduke of contracts be the foundation Let red the colour I pay tribute to Let rise a wall against the wind that shall fallLet the four cardinal gates close.Let the three-forked road from the crown reaching unto the Kingdom rotate.I hereby declare. Your body shall serve under me. My fate shall be your sword.Submit to the beckoning of the Holy Grail If you will submit to this will and this reason…Then answer!An oath shall be sworn here! I shall attain all virtues of all of Heaven. I shall have dominion over all evils of all of Hell! "
//     })
// };


import { Resend } from 'resend';

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);



const resend = new Resend("re_ENjzcJCd_5vaHdMStJ6d2if64QsEZe55o");

export async function POST(formData: FormData) {
  try {
    console.log("Begin test")
    console.log("This is the test" + process.env.NEXT_PUBLIC_TEST_GRAB);
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['lima.chris97@gmail.com'],
      subject: 'Hello world',
      reply_to: formData.get("senderEmail") as string,
      text: formData.get("message") as string
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}