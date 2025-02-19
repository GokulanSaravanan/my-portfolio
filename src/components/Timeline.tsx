import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase ,faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sept 2023 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Webstormers - App Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">TamilNadu , India</h4>
            <p>
            Collaborated on real-time projects as a Flutter front-end developer at Webstromers, gaining valuable experience in the dynamic
            and collaborative work environment of the company
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BSNL - Network Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TamilNadu , India</h4>
            <p>
            Basic Mobile Networks ,Networking Tools ,Networking over Layers
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2022 - Oct 2022 "
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">KarmaDev.in - App Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TamilNadu , India</h4>
            <p>
            Acquired knowledge in Flutter Framework, Dart, Android app development including their features.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's Degree - GCE , Salem</h3>
            <h4 className="vertical-timeline-element-subtitle">Salem , TamilNadu , India</h4>
            <p>
            Bachelor of Engineering in Computer Science and Engineering(CGPA of 8.7)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;