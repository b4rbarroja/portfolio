import { Router } from "express";
import {
  createContact,
  deleteContact,
  getContacts,
  markContactRead,
} from "../controllers/contact.controller.ts";
import authMiddleware from "../middleware/authMiddleware.ts";

const router = Router();

type ContactParams = {
  id: string;
};

router.get("/", authMiddleware, getContacts);
router.post("/", createContact);
router.patch<ContactParams>("/:id/read", authMiddleware, markContactRead);
router.delete<ContactParams>("/:id", authMiddleware, deleteContact);

export default router;
