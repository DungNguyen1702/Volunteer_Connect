import React from "react";
import ImageTag from "../imageTag";
import './index.scss';
import SupportFunction from '../../support/support_function'

function CertificateComponent(props) {
    const { data } = props;

    return (
        <div class="certificate-component-wrapper">
            <ImageTag
                src={data.certificate}
                width={"100%"}
                height={200}
                nameImage={"certificate name"}
            />
            <p class='certificate-date-earn'>{data.date_earn_certificate}</p>
            <h3 class='certificate-name'>{SupportFunction.TruncateText(`Certificate of "${data.activity.name}" activity`, 50)}</h3>
        </div>
    );
}

export default CertificateComponent;
