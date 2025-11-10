import { redirect } from "next/navigation";

export default function ContactPage() {
    // The contact section was removed from the single-page layout.
    // Redirect old /contact requests to the homepage.
    redirect("/");
}
