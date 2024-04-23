import { STATUS } from "../constants/activity_status";
import { TYPES } from "../constants/activity_types"


function TruncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return <span>{text}</span>;
    }
    return <span>{`${text.slice(0, maxLength)}...`}</span>;
};

function ActivityType(id){
    return TYPES[id];
}

function ActivityStatus(dateStart, dateEnd) {
    const currentDate = new Date();
    const startDate = new Date(dateStart);
    const endDate = new Date(dateEnd);

    if(endDate < currentDate)
    {
        return STATUS[3]
    }
    else if (startDate > currentDate)
    {
        return STATUS[2]
    }
    else
    {
        return STATUS[1]
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

function convertToHTML(htmlString)
{
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}

function truncateHTMLString(htmlString, maxLength) {
    // Chuyển đổi đoạn string HTML thành một đối tượng HTML
    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(htmlString, 'text/html');

    // Lấy nội dung chính từ đối tượng HTML
    const mainContent = htmlDocument.querySelector('h2').nextElementSibling;

    // Lấy toàn bộ nội dung
    const fullContent = mainContent.textContent;

    // Kiểm tra độ dài nội dung
    if (fullContent.length > maxLength) {
        // Nếu nội dung vượt quá maxLength, cắt bớt và thêm dấu "..."
        const truncatedContent = fullContent.substring(0, maxLength) + '...';
        return truncatedContent;
    } else {
        // Nếu không, trả về nội dung gốc
        return fullContent;
    }
}

function mainContentHTML(htmlString, maxLength) {
    
    // Lấy nội dung được cắt bớt độ dài
    const truncatedContent = truncateHTMLString(htmlString, maxLength);

    // Sử dụng dangerouslySetInnerHTML để hiển thị nội dung
    return <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />;
}

const Utils = {
    TruncateText,
    ActivityType,
    ActivityStatus,
    getStringParticipant,
    getStringComment,
    getStringReply,
    convertToHTML,
    mainContentHTML,
};

export default Utils;