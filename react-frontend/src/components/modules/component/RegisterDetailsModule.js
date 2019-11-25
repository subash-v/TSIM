import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./RegisterDetailsModule.css";
import Back from "../../../images/Back.svg";
import Icon from "../../../core/Icon";
import VerticalStatus from "../../Feed/VerticalStatus";
import time from "../../../images/time-grey.svg";
import calander from "../../../images/Date-grey.svg";
import add_fill from "../../../images/Add_Fill.svg";
import sub from "../../../images/Subtract-Fill-color.svg";
import Button from "../../general/Button";
import Accordion from "../../general/Accordion";
import ControlInput from "../../../core/ControlInput";
import edit from "../../../images/Edit-profile.svg";
import location from "../../../images/Location-white.svg";
import date_blue from "../../../images/Date-blue.svg";
import time_blue from "../../../images/time_blue.svg";
export default class RegisterDetailsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTicket: "active",
      attendedetails: "inActive",
      review: "inActive",
      Proceed: 1,
      activeIndex: null,
      name: "",
      email: "",
      mobileno: "",
      name2: "",
      email2: "",
      mobileno2: ""
    };
  }
  handleButtonClick = () => {
    if (this.state.Proceed + 1 === 3) {
      this.setState({
        Proceed: 3,
        selectTicket: "complete",
        attendedetails: "active"
      });
    } else if (this.state.Proceed + 1 === 4) {
      this.setState({
        Proceed: 4,
        selectTicket: "complete",
        attendedetails: "complete",
        review: "active"
      });
    } else {
      if (this.state.Proceed < 5) {
        this.setState({ Proceed: this.state.Proceed + 1 });
      }
    }
  };
  onOpenAccordian = activeIndex => {
    this.setState({
      activeIndex
    });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.modalBase}>
            <div className={styles.registerHeader}>
              <div className={styles.icon}>
                <Icon image={Back} size={22} />
              </div>
              <div className={styles.registerText}>Registration Details</div>
            </div>
            <div className={styles.verticalScroller}>
              <VerticalStatus
                first={this.state.selectTicket}
                second={this.state.attendedetails}
                third={this.state.review}
              />
            </div>

            <div className={styles.contentHolder}>
              <div className={styles.selectHeader}>
                {this.state.Proceed == 3 && this.state.Proceed == 4
                  ? "Add attendee details"
                  : this.state.Proceed === 5
                  ? "Review Order"
                  : "Select number of tickets"}
              </div>
              {this.state.Proceed < 3 && (
                <div className={styles.buildingBlocks}>
                  Building a Strong Personal Brand by Uma Kasoji
                </div>
              )}
              {this.state.Proceed < 3 && (
                <div className={styles.advanceText}>Advanced Level</div>
              )}{" "}
              {this.state.Proceed === 1 && (
                <div className={styles.registerStaticDetails}>
                  <div className={styles.iconWithText}>
                    <div className={styles.icon}>
                      <Icon image={calander} size={15} />
                    </div>
                    <div className={styles.subText}>6th September 2019</div>
                  </div>
                  <div className={styles.iconWithText}>
                    <div className={styles.icon}>
                      <Icon image={time} size={15} />
                    </div>
                    <div className={styles.subText}>5:30 pm - 7:30 pm</div>
                  </div>
                  <div className={styles.personHolder}>
                    <div className={styles.textHolder}>
                      <div className={styles.personText}>Per Person</div>
                      <div className={styles.cost}>INR 1450 per person</div>
                    </div>
                    <div className={styles.counter}>
                      <Icon image={sub} size={50} />
                      <div className={styles.counterText}>1</div>
                      <Icon image={add_fill} size={50} />
                    </div>
                  </div>
                </div>
              )}
              {this.state.Proceed == 2 && (
                <div className={styles.accordianHolder}>
                  {accordianDeatils.map((val, i) => {
                    return (
                      <Accordion
                        offset={"10px 0"}
                        key={i}
                        image={val.icon}
                        size={15}
                        currentAccordian={i}
                        text={val.header}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {val.data &&
                          val.data.map(details => {
                            return (
                              <div className={styles.dataHolder}>
                                <Button
                                  type="primary"
                                  backgroundColor={"#D1CFE3"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={170}
                                  label={details.time}
                                  borderRadius={5}
                                />
                              </div>
                            );
                          })}
                      </Accordion>
                    );
                  })}
                  {ticketDetails.map((val, i) => {
                    return (
                      <Accordion
                        key={3}
                        image={val.icon}
                        size={15}
                        currentAccordian={3}
                        text={val.header}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {val.data &&
                          val.data.map(details => {
                            return (
                              <div className={styles.personHolder}>
                                <div className={styles.textHolder}>
                                  <div className={styles.personText}>
                                    {details.heading}
                                  </div>
                                  <div className={styles.cost}>
                                    {details.subHeading}
                                    <span className={styles.remaining}>
                                      {details.count}
                                    </span>
                                  </div>
                                </div>
                                <div className={styles.counter}>
                                  <Icon image={sub} size={50} />
                                  <div className={styles.counterText}>1</div>
                                  <Icon image={add_fill} size={50} />
                                </div>
                              </div>
                            );
                          })}
                      </Accordion>
                    );
                  })}
                </div>
              )}
              {(this.state.Proceed === 3 || this.state.Proceed === 4) && (
                <div className={styles.attenderHolder}>
                  <div className={styles.attendes}>
                    <div className={styles.attendeHeader}>
                      Attendee 1 <span>(Primary)</span>
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.name}
                        placeholder={"Name"}
                        height={40}
                        onChange={val => {
                          this.setState({ name: val });
                        }}
                      />
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.email}
                        placeholder={"Email Address"}
                        height={40}
                        onChange={val => {
                          this.setState({ email: val });
                        }}
                      />
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.mobileno}
                        placeholder={"Mobile No."}
                        height={40}
                        onChange={val => {
                          this.setState({ mobileno: val });
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.Attendes}>
                    <div className={styles.attendeHeader}>
                      Attendee 2 <span>(Primary)</span>
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.name2}
                        placeholder={"Name"}
                        height={40}
                        onChange={val => {
                          this.setState({ name2: val });
                        }}
                      />
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.email2}
                        placeholder={"Email Address"}
                        height={40}
                        onChange={val => {
                          this.setState({ email2: val });
                        }}
                      />
                    </div>
                    <div className={styles.inputHolder}>
                      <ControlInput
                        value={this.state.mobileno2}
                        placeholder={"Mobile No."}
                        height={40}
                        onChange={val => {
                          this.setState({ mobileno2: val });
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {this.state.Proceed === 5 && (
                <div className={styles.reviewHolder}>
                  <div className={styles.orderHeaderHolder}>
                    <div className={styles.orderHeader}>ORDER SUMMARY</div>
                    <div className={styles.editIconHolder}>
                      <Icon image={edit} size={30} />
                    </div>
                  </div>
                  <div className={styles.reviewDetailsHolder}>
                    <div className={styles.buildingBlocks}>
                      Building a Strong Personal Brand by Uma Kasoji
                    </div>
                    <div className={styles.advanceText}>Advanced Level</div>
                    <div className={styles.iconWithText}>
                      <div className={styles.icon}>
                        <Icon image={time} size={15} />
                      </div>
                      <div className={styles.subText}>5:30 pm - 7:30 pm</div>
                    </div>
                    <div className={styles.iconWithText}>
                      <div className={styles.icon}>
                        <Icon image={calander} size={15} />
                      </div>
                      <div className={styles.subText}>6th September 2019</div>
                    </div>

                    <div className={styles.iconWithText}>
                      <div className={styles.icon}>
                        <Icon image={location} size={15} />
                      </div>
                      <div className={styles.subText}>DBS, Hyderabad</div>
                    </div>
                    <div className={styles.iconWithText}>
                      <div className={styles.icon}>
                        <Icon image={location} size={15} />
                      </div>
                      <div className={styles.subText}>
                        INR 1,450 x 2 Tickets
                      </div>
                    </div>

                    <div className={styles.attendeeText}>
                      Attendee: <div>Ms. Pratiksha Gupta</div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={
                  this.state.Proceed == 3
                    ? styles.attendeStyle
                    : styles.amountHolder
                }
              >
                {this.state.Proceed != 3 && (
                  <div className={styles.textHolder}>
                    <div className={styles.total}>Total</div>
                    <div className={styles.amount}>
                      INR 1,450{" "}
                      {this.state.Proceed > 4 && (
                        <span className={styles.taxes}>
                          (inclusive of all taxes)
                        </span>
                      )}
                    </div>
                  </div>
                )}
                <div
                  className={styles.button}
                  onClick={() => this.handleButtonClick()}
                >
                  <Button
                    type="primary"
                    backgroundColor={"#4F439A"}
                    fontColor={"#fff"}
                    height={50}
                    width={170}
                    label="Proceed"
                    borderRadius={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}

const accordianDeatils = [
  {
    header: "Select Date",
    icon: date_blue,
    data: [
      { time: "Sat, 10 Oct 2019" },
      { time: "Sat, 10 nov 2019" },
      { time: "Sat, 10 Dec 2019" }
    ]
  },
  {
    header: "Select Time",
    icon: time_blue,
    data: [
      { time: "9:30-11:30 am" },
      { time: "1:30-3:30 pm" },
      { time: "7:30-9:30 pm" }
    ]
  }
];

const ticketDetails = [
  {
    header: "Select Ticket",
    icon: date_blue,
    data: [
      {
        heading: "Early Bird Tickets",
        subHeading: "INR 1450 per person",
        count: "14 remaining"
      },
      {
        heading: "Early Bird Tickets",
        subHeading: "INR 1450 per person"
      },
      {
        heading: "Early Bird Tickets",
        subHeading: "INR 1450 per person",
        count: "Filling Fast!"
      }
    ]
  }
];
