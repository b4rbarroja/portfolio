import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContacts,
} from "../controllers/contact.controller.ts";
import authMiddleware from "../middleware/authMiddleware.ts";

const router = Router();

type ContactParams = {
  id: string;
};

// GET all contacts
router.get("/", authMiddleware, getContacts);

// POST create contact
router.post("/", createContact);

// DELETE contact
router.delete<ContactParams>("/:id", authMiddleware, deleteContact);

export default router;
