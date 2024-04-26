import { useParams } from 'react-router-dom';
import './index.scss';
import fakeData from '../../../../data/fake_data.json';
import SupportFunction from '../../../../support/support_function'
import { Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { COLOR_FONT, COLOR_STATUS } from '../../../../constants/color_status';
import OrganizationIcon from '../../../../components/organization';
import { useState } from 'react';
import { ICONS } from '../../../../constants/icons';

function ActivityDetail (){
    const { id } = useParams();
    const data = fakeData.Activity_Detail;
    const activityStatus = SupportFunction.ActivityStatus(data.date_start, data.date_end)
    const org = data.Organization;
    const [tabButton,setTabButton] = useState(2);

    const onClickUpdate = ()=>{

    };
    const onClickDelete = ()=>{

    };
    const onClickTask = ()=>{
        setTabButton(1);
    };
    const onClickPost = ()=>{
        setTabButton(2);
    };
    const onClickMember = ()=>{
        setTabButton(3);
    };

    return (
        <div class='activity-detail-wrapper'>
            <div class='activity-detail-header'>
                <img alt='activity-img' src={data.image} id='activity-image'/>
                <div id="activity-img-blur"></div>
                <div id='activity-header-content-wrapper'>
                    <div id='activity-manager-button-wrapper'>
                        <Button
                            className='activity-manager-button-item'
                            onClick={onClickUpdate}
                            icon={
                                <EditOutlined
                                    className='activity-manager-button-icon'
                                />
                            }
                        >
                            Update
                        </Button>
                        <Button
                            className='activity-manager-button-item'
                            onClick={onClickDelete}
                            icon={
                                <DeleteOutlined
                                    className='activity-manager-button-icon'
                                />
                            }
                        >
                            Delete
                        </Button>
                    </div>
                    <h1 id='activity-name'>{data.name}</h1>
                    <h3 
                        id='activity-status'
                        style={{backgroundColor : COLOR_STATUS[activityStatus], color : COLOR_FONT[activityStatus]}}
                    >{activityStatus}</h3>
                    <div class='activity-header-info-hr-wrapper'>
                        <div id='activity-header-info-wrapper'>
                        <div class="activity-header-info-item-container">
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Organization : </p>
                                <div class='activity-header-info-item-content'>
                                    <OrganizationIcon name={org.name} avatar={org.avatar} id={org.id}/>
                                </div>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Location : </p>
                                <p  class='activity-header-info-item-content'>{data.location}, {SupportFunction.ActivityCountry(data.country)}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Start date : </p>
                                <p  class='activity-header-info-item-content'>{data.date_start}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>End date : </p>
                                <p  class='activity-header-info-item-content'>{data.date_end}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Registration date : </p>
                                <p class='activity-header-info-item-content'>{data.date_end}</p>
                            </div>
                        </div>
                        <div id ='vertical-line'></div>
                        <div class="activity-header-info-item-container">
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Participant number : </p>
                                <p class='activity-header-info-item-content'>{SupportFunction.getStringParticipant(data.participants)}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Post number : </p>
                                <p class='activity-header-info-item-content'>{SupportFunction.getStringPost(data.postNumber)}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Category : </p>
                                <p class='activity-header-info-item-content'>{SupportFunction.ActivityType(data.type)}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Apply form number : </p>
                                <p class='activity-header-info-item-content'>{SupportFunction.getStringApplyForm(data.applyForms)}</p>
                            </div>
                            <div class='activity-header-info-item'>
                                <p class='activity-header-info-item-title'>Email : </p>
                                <p class='activity-header-info-item-content'>{data.email}</p>
                            </div>
                        </div>
                    </div>
                    <hr id='horizontal-line'></hr>  
                    </div>
                    <p id='activity-content'>
                        `"${data.content}"`
                    </p>
                    <div id='tabbar-button-wrapper'>
                        <Button
                            className= {`tabbar-button ${tabButton === 1 ? 'tabbar-button-active' : 'tabbar-button-inactive' }`}
                            onClick={onClickTask}
                        >
                            <img alt='post-management-icon' src={tabButton===1 ? ICONS.TaskActive : ICONS.TaskInActive} class='tab-button-icon'/>
                            <p>Task management</p>
                        </Button>
                        <Button
                            className= {`tabbar-button ${tabButton === 2 ? 'tabbar-button-active' : 'tabbar-button-inactive' }`}
                            onClick={onClickPost}
                        >
                            <img alt='post-management-icon' src={tabButton===2 ? ICONS.PostActive : ICONS.PostInActive} class='tab-button-icon'/>
                            <p>Post management</p>
                        </Button>
                        <Button
                            className= {`tabbar-button ${tabButton === 3 ? 'tabbar-button-active' : 'tabbar-button-inactive' }`}
                            onClick={onClickMember}
                        >
                            <img alt='member-management-icon' src={tabButton===3 ? ICONS.MemberActive : ICONS.MemberInActive} class='tab-button-icon'/>
                            <p>Member management</p>
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ActivityDetail;