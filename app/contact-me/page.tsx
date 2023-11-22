import ContactDisplay from "@/components/ContactDisplay"
import ContactSideBar from "@/components/ContactSideBar"


const ContactPage = () => {
    return (
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-about-medium-layout 2xl:grid-cols-about-layout space-y-6 lg:space-y-0 overflow-y-scroll lg:overflow-y-auto">
            <ContactSideBar />
            <div className="col-span-2 lg:overflow-y-auto">
                <ContactDisplay />
            </div>
        </div>
    )
}

export default ContactPage