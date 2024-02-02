import DOMPurify from "dompurify";

export const purifyHtml = (html) => {
    return DOMPurify.sanitize(html);
}

export const constructAPIUrl = (category, difficulty) => {
    return `https://opentdb.com/api.php?amount=10&category=${category}${difficulty !== null ? `&difficulty=${difficulty}` : ''}&type=multiple`;
};
