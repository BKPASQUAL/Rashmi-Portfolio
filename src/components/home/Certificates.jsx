import React from "react";
import "../../assets/css/Certificate.css";
import cvo from "../../assets/images/certificates/cvo.png";
import aws from "../../assets/images/certificates/aws.png";
import dl from "../../assets/images/certificates/dl.png";
import ipo from "../../assets/images/certificates/ipo.png";
import { div } from "framer-motion/client";
import { Divider } from "@mui/material";

const certificates = [
  {
    id: 1,
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    description:
      "This certificate is awarded by AWS Training and Certification to individuals who complete the AWS Academy Cloud Foundations course, providing foundational knowledge in AWS cloud concepts, core services, pricing, architecture, and support models.",
    image: aws,
    link: "https://www.credly.com/badges/41a0d56e-c585-4ebd-90c8-ffe6deccedbd/print",
  },
  {
    id: 2,
    title: "Computer Vision Onramp",
    description:
      "This certificate verifies the successful completion of 100% of the self-paced training course on Computer Vision Onramp, offered by MathWorks Training Services.",
    image: cvo,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=b567be65-e2d3-40ac-b8e1-ec14cec98883&",
  },
  {
    id: 3,
    title: "Image Processing Onramp",
    description:
      "This certificate confirms the successful completion of 100% of the self-paced training course on Image Processing Onramp, provided by MathWorks Training Services.",
    image: ipo,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=870b32e3-fad4-4969-9761-92717c1107bc&",

  },
  {
    id: 4,
    title: "Deep Learning Onramp Completion",
    description:
      "This certificate acknowledges the successful completion of 100% of the self-paced training course on Deep Learning Onramp, delivered by MathWorks Training Services.",
    image: dl,
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=bdf6cab3-b679-4bfe-b71f-327043bf173e&",
  },
];

function Certificates() {
  return (
    <div>
      {" "}
      <div className="bg-bgcolour text-black  px-6 md:px-16  py-10 md:py-16 lg:py-28 lg:px-72 dark:bg-black">
        <div className="text-3xl md:text-5xl mb-12 lg:mb-12 font-extrabold text-center dark:text-white">
          Certificates
        </div>
        <div className="Certificate-con">
          {certificates.map((certificate) => (
            <div className="flip-card" key={certificate.id}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="Certificate-image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3>{certificate.title}</h3>
                  <p>{certificate.description}</p>
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      <span className="material-symbols-outlined">link</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div >
        <Divider className="px-20"/>
      </div>
    </div>
  );
}

export default Certificates;
