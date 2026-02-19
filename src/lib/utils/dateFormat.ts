export function fullDateFormat(timestamp: number) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const sMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return `${hours}:${minutes} ${days[date.getDay()]}, ${date.getDate()} ${sMonths[date.getMonth()]} ${date.getFullYear()}`;
}

export function shortDateFormat(timestamp: number) {
    const date = new Date(timestamp)
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}