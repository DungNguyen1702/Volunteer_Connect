import { STATUS } from "../constants/activity_status";
import { TYPES } from "../constants/activity_types";
import { COUNTRY } from "../constants/activity_countries";

function TruncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }
    return <span>{`${text.slice(0, maxLength)}...`}</span>;
}

function ActivityType(id) {
    return TYPES[id];
}

function ActivityCountry(id) {
    return COUNTRY[id];
}

function ActivityStatus(dateStart, dateEnd) {
    const currentDate = new Date();
    const startDate = new Date(dateStart);
    const endDate = new Date(dateEnd);

    if (endDate < currentDate) {
        return STATUS[3];
    } else if (startDate > currentDate) {
        return STATUS[2];
    } else {
        return STATUS[1];
    }
}

function getStringParticipant(participant) {
    if (participant === 0 || participant === 1) {
        return participant + " participant";
    } else {
        return participant + " participants";
    }
}

function getStringComment(comment) {
    if (comment === 0 || comment === 1) {
        return comment + " comment";
    } else {
        return comment + " comments";
    }
}

function getStringReply(reply) {
    if (reply === 0 || reply === 1) {
        return reply + " reply";
    } else {
        return reply + " replies";
    }
}

function getStringPost(post) {
    if (post === 0 || post === 1) {
        return post + " post";
    } else {
        return post + " posts";
    }
}

function getStringApplyForm(form) {
    if (form === 0 || form === 1) {
        return form + " form";
    } else {
        return form + " forms";
    }
}

function convertToHTML(htmlString) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

function truncateHTMLString(htmlString, maxLength) {
    // Chuyển đổi đoạn string HTML thành một đối tượng HTML
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, "text/html");

    // Lấy nội dung chính từ đối tượng HTML
    const paragraphs = htmlDocument.querySelectorAll("p");
    const firstParagraph = paragraphs[0] ? paragraphs[0].textContent : ""; // Lấy nội dung của đoạn p đầu tiên
    const secondParagraph = paragraphs[1] ? paragraphs[1].textContent : ""; // Lấy nội dung của đoạn p thứ hai

    // Nối hai đoạn p lại với nhau
    const combinedContent = firstParagraph + '<br><br/>' + secondParagraph;

    // Kiểm tra độ dài nội dung
    if (combinedContent.length > maxLength) {
        // Nếu nội dung vượt quá maxLength, cắt bớt và thêm dấu "..."
        const truncatedContent = combinedContent.substring(0, maxLength) + "...";
        return truncatedContent;
    } else {
        // Nếu không, trả về nội dung gốc
        return combinedContent;
    }
}

function mainContentHTML(htmlString, maxLength) {
    // Lấy nội dung được cắt bớt độ dài
    const truncatedContent = truncateHTMLString(htmlString, maxLength);

    // Sử dụng dangerouslySetInnerHTML để hiển thị nội dung
    return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
}

function getCurrentlyDate() {
    const currentDate = new Date();

    // Lấy ngày, tháng và năm hiện tại
    const year = currentDate.getFullYear();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);

    // Định dạng ngày theo yyyy-MM-dd
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

function removeSpaceInString(str)
{
    return str.replace(/\s+/g, '');
}

const Utils = {
    TruncateText,
    ActivityType,
    ActivityCountry,
    ActivityStatus,
    getCurrentlyDate,
    getStringParticipant,
    getStringComment,
    getStringReply,
    getStringPost,
    getStringApplyForm,
    convertToHTML,
    mainContentHTML,
    removeSpaceInString,
};

export default Utils;
