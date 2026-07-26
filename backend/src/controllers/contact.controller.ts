import type { Request, Response } from "express";
import prisma from "../lib/prisma.ts";
import { contactSchema } from "../schemas/contact.schema.ts";

type ContactParams = {
  id: string;
};

export const getContacts = async (
  req: Request,
  res: Response
) => {
  const contacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  res.json(contacts);
};

export const createContact = async (
  req: Request,
  res: Response
) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Invalid data",
      errors: result.error.issues,
    });
  }

  const contact = await prisma.contact.create({
    data: result.data,
  });

  res.status(201).json(contact);
};

export const deleteContact = async (
  req: Request<ContactParams>,
  res: Response
) => {
  const { id } = req.params;

  const contact = await prisma.contact.delete({
    where: {
      id,
    },
  });

  res.json({
    message: "Contact deleted successfully",
    contact,
  });
};

export const markContactRead = async (
  req: Request<ContactParams>,
  res: Response
) => {
  const { id } = req.params;

  const contact = await prisma.contact.findUnique({
    where: { id },
  });

  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }

  const updated = await prisma.contact.update({
    where: { id },
    data: { read: !contact.read },
  });

  res.json(updated);
};
