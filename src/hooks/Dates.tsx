import { format } from "date-fns";

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "EEEE d 'de' MMMM");
};

export default formatDate;