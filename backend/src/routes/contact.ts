import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContacts,
} from "../controllers/contact.controller.ts";

const router = Router();

type ContactParams = {
  id: string;
};

// GET all contacts
router.get("/", getContacts);

// POST create contact
router.post("/", createContact);

// DELETE contact
router.delete<ContactParams>("/:id", deleteContact);

export default router;