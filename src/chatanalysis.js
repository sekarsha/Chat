import moment from "moment"

export const waittt = (text) => {

    if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
        return "may I tell you about the course details,say YES or NO  "
    if (text.includes("yes") || text.includes("Yes") || text.includes("Student") ||text.includes("student") ||text.includes("Courses") || text.includes("courses"))
        return "whate you kind like course for Example Diploma Courses ,Arts Courses,Engineering Courses "
    if (text.includes("NO")||text.includes("no")||text.includes("No"))
        return "How can i help you ? For Example {Student details ,Date,Time and etc....}"
    else if (text.includes('Diploma') || text.includes('diploma') || text.includes('diploma course') || text.includes('Diploma course'))
        return "Diploma in Medical Laboratory Technology ,Diploma in Physician Assistant,Diploma in Anesthesia Technology, and May I tell you about the Fees details,Type Fees or NO "
    else if (text.includes('Arts') || text.includes('arts'))
        return " B.A. Tamil Literature,B.A.English Language & Literature,B.A.English Literature with Computer Applications,B.A.History and May I tell you about the Fees details,Type Fees or NO "
    else if (text.includes("Engineering") || text.includes("engineering") || text.includes("Eng") || text.includes("eng"))
        return "B.E. Civil Engineering,B.E. Mechanical Engineering,B.E. Production Engineering ,May I tell you about the Fees details,Type Fees or NO  "
    else if (text.includes('date') || text.includes('Date'))
        return moment().format("MMM Do YYYY")
    else if (text.includes('time') || text.includes('Time'))
        return moment().format("h:mm:ss: a ")
    else if (text.includes('fees') || text.includes('Fees') )
        return  "https://www.annauniv.edu/"
    else if (text.includes("tank you") || text.includes("Tank you"))
        return ("Thanks for Connecting me")
    return " I Can't get you "
}