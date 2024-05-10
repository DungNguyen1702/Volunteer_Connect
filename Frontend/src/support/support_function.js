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

function getStringCertificate(certificate) {
    if (certificate === 0 || certificate === 1) {
        return certificate + " certificate";
    } else {
        return certificate + " certificates";
    }
}

function getStringActivity(activity) {
    if (activity === 0 || activity === 1) {
        return activity + " activity";
    } else {
        return activity + " activities";
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
    const combinedContent = firstParagraph + "<br><br/>" + secondParagraph;

    // Kiểm tra độ dài nội dung
    if (combinedContent.length > maxLength) {
        // Nếu nội dung vượt quá maxLength, cắt bớt và thêm dấu "..."
        const truncatedContent =
            combinedContent.substring(0, maxLength) + "...";
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
function removeSpaceInString(str) {
    return str.replace(/\s+/g, "");
}

function randomHexColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);

    while (randomColor.length < 6) {
        randomColor = "0" + randomColor;
    }

    return "#" + randomColor;
}

function getFirstCharacter(str) {
    return str.charAt(0);
}

function filterPost(listPost, category, country, status, sortBy, sortOrder) {
    let filteredList = [...listPost];

    if (parseInt(category) !== 0)
        filteredList = [
            ...filteredList.filter(
                (post) => parseInt(post.activity.type) === parseInt(category)
            ),
        ];
    if (parseInt(country) !== 0)
        filteredList = [
            ...filteredList.filter(
                (post) => parseInt(post.activity.country) === parseInt(country)
            ),
        ];
    if (parseInt(status) !== 0)
        filteredList = [
            ...filteredList.filter(
                (post) =>
                    STATUS[status] ===
                    ActivityStatus(
                        post.activity.dateStart,
                        post.activity.dateEnd
                    )
            ),
        ];

    switch (sortBy) {
        case 1:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(a.activity.dateStart) -
                            new Date(b.activity.dateStart)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(b.activity.dateStart) -
                            new Date(a.activity.dateStart)
                    ),
                ];
            break;
        case 2:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(a.activity.dateEnd) -
                            new Date(b.activity.dateEnd)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(b.activity.dateEnd) -
                            new Date(a.activity.dateEnd)
                    ),
                ];
            break;
        case 3:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(a.activity.deadline) -
                            new Date(b.activity.deadline)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(b.activity.deadline) -
                            new Date(a.activity.deadline)
                    ),
                ];
            break;
        case 4:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(a.activity.createdAt) -
                            new Date(b.activity.createdAt)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) =>
                            new Date(b.activity.createdAt) -
                            new Date(a.activity.createdAt)
                    ),
                ];
            break;
        default:
            break;
    }

    return filteredList;
}

function filterAct(
    listAct,
    categoryList,
    countryList,
    statusList,
    sortBy,
    sortOrder,
    dateStart,
    dateEnd
) {
    let filteredList = [...listAct];

    // filter By category
    filteredList = [
        ...filteredList.filter((act) => categoryList.includes(act.type + "")),
    ];

    // filter by country
    filteredList = [
        ...filteredList.filter((act) => countryList.includes(act.country + "")),
    ];

    // filter by status
    filteredList = [
        ...filteredList.filter((act) =>
            statusList.includes(ActivityStatus(act.dateStart, act.dateEnd))
        ),
    ];

    switch (sortBy) {
        case 1:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(a.dateStart) - new Date(b.dateStart)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(b.dateStart) - new Date(a.dateStart)
                    ),
                ];
            break;
        case 2:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(a.dateEnd) - new Date(b.dateEnd)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(b.dateEnd) - new Date(a.dateEnd)
                    ),
                ];
            break;
        case 3:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(a.deadline) - new Date(b.deadline)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(b.deadline) - new Date(a.deadline)
                    ),
                ];
            break;
        case 4:
            if (sortOrder === 1)
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                    ),
                ];
            else
                filteredList = [
                    ...filteredList.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    ),
                ];
            break;
        default:
            break;
    }

    if(dateStart)
        {
            filteredList = [
                ...filteredList.filter((act) =>
                    new Date(act.dateStart) >= new Date(dateStart)
                )
            ]
        }

    if(dateEnd)
        {
            filteredList = [
                ...filteredList.filter((act) =>
                    new Date(act.dateEnd) <= new Date(dateEnd)
                )
            ]
        }

    return filteredList;
}

function isTokenExpired(token) {
    if (!token) return true; // Nếu không có token, coi như đã hết hạn
    const expiry = new Date(token.exp * 1000); // Chuyển đổi thời gian hết hạn từ giây sang mili-giây
    const currentTime = new Date();
    return currentTime > expiry; // So sánh thời gian hiện tại với thời gian hết hạn
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
    getStringCertificate,
    getStringActivity,
    convertToHTML,
    mainContentHTML,
    removeSpaceInString,
    randomHexColor,
    getFirstCharacter,
    filterPost,
    filterAct,
    isTokenExpired,
};

export default Utils;
