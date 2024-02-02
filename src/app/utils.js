import DOMPurify from "dompurify";

export const purifyHtml = (html) => {
return DOMPurify.sanitize(html);
}