"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceSchema.omit({ date: true, id: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;

  const date = new Date().toISOString().split("T")[0];

  //TODO: Chp# 13 Handling errors
  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoices",
    };
  }

  //TODO: Chp# 12 Before try catch
  // await sql`
  //   INSERT INTO invoices (customer_id, amount, status, date)
  //   VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  // `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
  //Testing in console
  // console.log(rawFormData);
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Update Invoice",
    };
  }

  // await sql`
  //   UPDATE invoices
  //   SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
  //   WHERE id = ${id}
  // `;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function deleteInvoice(id: string) {

  // TODO: Chp# 13 throw error function activated, then try catch block deactivated automatically

  throw new Error('Failed to Delete Invoice');

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
    return {message: 'Invoice Deleted'};

  } catch (error) {
    return {
      message: "Database Error: Failed to Delete Invoice",
    };
  }



  // await sql`DELETE FROM invoices WHERE id = ${id}`;
  // revalidatePath("/dashboard/invoices");
}