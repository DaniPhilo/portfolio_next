import ContactDisplay from "@/components/ContactDisplay"
import ContactSideBar from "@/components/ContactSideBar"


const ContactPage = () => {
    return (
        <div className="w-full h-full grid grid-cols-about-medium-layout 2xl:grid-cols-about-layout">
            <ContactSideBar />
            <div className="col-span-2 overflow-y-auto">
                <ContactDisplay />
            </div>
        </div>
    )
}

export default ContactPage