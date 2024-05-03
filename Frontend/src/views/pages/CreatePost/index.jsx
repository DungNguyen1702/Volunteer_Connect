import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.scss";
import FakeData from "../../../data/fake_data.json";
import TextArea from "antd/es/input/TextArea";
import { Button, Upload } from "antd";
import { UPLOADIMAGELINK } from "../../../constants/uploadImageLink";
import { ToastContainer, toast } from "react-toastify";
import { FormOutlined, UploadOutlined } from "@ant-design/icons";
import ImageTag from "../../../components/imageTag";
import { IMAGES } from "../../../constants/images";
import { TYPES } from "../../../constants/activity_types";
import { COUNTRY } from "../../../constants/activity_countries";
import SupportFunction from "../../../support/support_function";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function CreatePost() {
    const { activityId } = useParams();
    const navigate = useNavigate();

    const [title, setTile] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");

    const activityData = FakeData.ActivityCreatePost;

    const toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        // ["blockquote", "code-block"],
        // ["link", "image", "video", "formula"],
        ["link", "image"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        // [{ script: "sub" }, { script: "super" }], // superscript/subscript
        // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        // [{ direction: "rtl" }], // text direction

        // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        // [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        // ["clean"], // remove formatting button
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    const onChangeTitle = (e) => {
        setTile(e.target.value);
    };

    const onChangeUploadImage = (info) => {
        console.log(info);
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            toast.success(`${info.file.name} file uploaded successfully`);
            setImage(info.file.response.result.url);
        } else if (info.file.status === "error") {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    const onClickPost = () => {
        if (title === "" || image === "" || content === "") {
            const error = ` ${
                (title === "" && "Please input title") ||
                (image === "" && "Please choose image") ||
                (content === "") & "Please input content"
            }`;
            toast.error(error);
            return;
        }

        toast.success("Create post successfull");
        setTimeout (() => (
            navigate(`/activity-detail/${activityId}`)
        ), 2000)
    };

    return (
        <div class="create-post-wrapper">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme="colored"
            />
            <h1 class="create-post-title">Create post</h1>
            <div class="create-post-content-wrapper">
                <div class="create-post-info-wrapper">
                    {/* Title  */}
                    <div class="create-post-info-item">
                        <h3 class="create-post-info-item-title margin-bottom-10">
                            Title
                        </h3>
                        <TextArea
                            autoSize
                            value={title}
                            onChange={onChangeTitle}
                            className="create-post-info-title-input"
                            maxLength={254}
                        />
                    </div>

                    {/* Image  */}
                    <div class="create-post-info-item">
                        <div class="display-flex margin-bottom-10">
                            <h3 class="create-post-info-item-title">Image</h3>
                            <Upload
                                name="image"
                                action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                                onChange={onChangeUploadImage}
                                showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
                            >
                                <Button
                                    className="create-post-button"
                                    icon={<UploadOutlined />}
                                >
                                    Upload image
                                </Button>
                            </Upload>
                        </div>
                        <ImageTag
                            src={image}
                            width={"90%"}
                            height={400}
                            nameImage={"CreatePhotoImage"}
                        />
                    </div>

                    {/* Content*/}
                    <div className="create-post-info-item">
                        <h3 class="create-post-info-item-title margin-bottom-10">
                            Content
                        </h3>
                        {/* React quill  */}
                        <ReactQuill
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            modules={modules}
                            className="create-post-content-input"
                        />
                    </div>

                    {/* Button post  */}
                    <Button
                        onClick={onClickPost}
                        className="create-post-button margin-top-50"
                        icon={<FormOutlined />}
                    >
                        Post
                    </Button>
                </div>
                <div class="create-post-preview-wrapper">
                    <h2 class="create-post-title">Preview</h2>
                    <h3 class="create-post-preview-title">{title}</h3>
                    <img
                        alt="New post"
                        src={image ? image : IMAGES.noPhoto}
                        class="create-post-preview-image"
                    />
                    <hr class="create-post-preview-hr" />
                    <div class="create-post-preivew-info-wrapper">
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">
                                Name activity :{" "}
                            </strong>
                            {activityData.name}
                        </p>
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">
                                Host's email :{" "}
                            </strong>
                            {activityData.email}
                        </p>
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">Category : </strong>
                            {TYPES[activityData.type]}
                        </p>
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">Location : </strong>
                            {activityData.location},{" "}
                            {COUNTRY[activityData.country]}
                        </p>
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">Schedule : </strong>
                            {activityData.date_start} - {activityData.date_end}
                        </p>
                        <p class="create-post-preview-info-item">
                            <strong class="primary-color">
                                Registration deadline :{" "}
                            </strong>
                            {activityData.deadline}
                        </p>
                    </div>
                    <hr class="create-post-preview-hr" />
                    <div class="create-post-preview-content">
                        {SupportFunction.convertToHTML(content)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
