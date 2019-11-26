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
import Counter from "../../general/Counter";
import AttendeeDetails from "./AttendeeDetails";
import HorizantalIconWithHeader from "../../../core/HorizantalIconWithHeader";
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
      mobileno2: "",
      counter: 1,
      ticketCounter: [],
      attende1Detials: null,
      attende2Detials: null
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
      if (this.state.Proceed < 6) {
        this.setState({ Proceed: this.state.Proceed + 1 });
      }
    }
  };
  goBack = () => {
    if (this.state.Proceed != 1) {
      this.setState({ Proceed: this.state.Proceed - 1 });
    }
  };
  setTicketCounter = val => {
    this.setState({ counter: val });
  };
  setcounter = (val, name) => {
    let newData = [];
    let dataExist =
      this.state.ticketCounter &&
      this.state.ticketCounter.length > 0 &&
      this.state.ticketCounter.find((ticket, i) => {
        return ticket.name === name;
      });
    if (this.state.ticketCounter.length < 1) {
      newData.push({ name: name, counter: val });
      this.setState({ ticketCounter: newData });
    } else {
      if (dataExist) {
        var index = this.state.ticketCounter.findIndex(function(ticket) {
          return ticket.name == dataExist.name;
        });
        newData.push(...this.state.ticketCounter);
        newData[index].name = name;
        newData[index].counter = val;
      } else {
        newData.push(...this.state.ticketCounter);
        newData.push({ name: name, counter: val });
        this.setState({ ticketCounter: newData });
      }
    }
  };
  onOpenAccordian = activeIndex => {
    this.setState({
      activeIndex
    });
  };
  addAttende1Details = val => {
    this.setState({ attende1Detials: val });
  };
  addAttende2Details = val => {
    this.setState({ attende2Detials: val });
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
              <div className={styles.icon} onClick={() => this.goBack()}>
                <Icon image={Back} size={22} />
              </div>
              <div className={styles.registerText}>Registration Details</div>
            </div>
            {this.state.Proceed !== 6 && (
              <div className={styles.verticalScroller}>
                <VerticalStatus
                  first={this.state.selectTicket}
                  second={this.state.attendedetails}
                  third={this.state.review}
                />
              </div>
            )}

            <div className={styles.contentHolder}>
              <div className={styles.selectHeader}>
                {this.state.Proceed == 3 || this.state.Proceed == 4
                  ? "Add attendee details"
                  : this.state.Proceed === 5
                  ? "Review Order"
                  : this.state.Proceed === 6
                  ? "Payment Confirmation"
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
                    <HorizantalIconWithHeader
                      icon={calander}
                      spacing={"7px"}
                      size={15}
                      text={"6th September 2019"}
                    />
                  </div>
                  <div className={styles.iconWithText}>
                    <HorizantalIconWithHeader
                      spacing={"7px"}
                      icon={time}
                      size={15}
                      text={"5:30 pm - 7:30 pm"}
                    />
                  </div>
                  <div className={styles.personHolder}>
                    <div className={styles.textHolder}>
                      <div className={styles.personText}>Per Person</div>
                      <div className={styles.cost}>INR 1450 per person</div>
                    </div>
                    <div className={styles.counter}>
                      <Counter
                        value={this.state.counter}
                        setvalue={val => this.setTicketCounter(val)}
                      ></Counter>
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
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
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
                        offset={"10px 0"}
                        key={3}
                        image={val.icon}
                        size={15}
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
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
                                  <Counter
                                    value={this.state.counter}
                                    setvalue={val =>
                                      this.setcounter(val, details.heading)
                                    }
                                  ></Counter>
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
                    <AttendeeDetails
                      title={"Attendee 1"}
                      onChange={val => this.addAttende1Details(val)}
                    />
                  </div>
                  <div className={styles.Attendes}>
                    <AttendeeDetails
                      title={"Attendee 2"}
                      subTitle={"Optional"}
                      onChange={val => this.addAttende2Details(val)}
                    />
                  </div>
                </div>
              )}
              {this.state.Proceed > 4 && (
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
                      <HorizantalIconWithHeader
                        icon={time}
                        size={15}
                        text={"5:30 pm - 7:30 pm"}
                      />
                    </div>
                    <div className={styles.iconWithText}>
                      <HorizantalIconWithHeader
                        icon={calander}
                        size={15}
                        text={"6th September 2019"}
                      />
                    </div>

                    <div className={styles.iconWithText}>
                      <HorizantalIconWithHeader
                        icon={location}
                        size={15}
                        text={"DBS, Hyderabad"}
                      />
                    </div>
                    <div className={styles.iconWithText}>
                      <HorizantalIconWithHeader
                        icon={location}
                        size={15}
                        text={"INR 1,450 x 2 Tickets"}
                      />
                    </div>

                    <div className={styles.attendeeText}>
                      Attendee: <div>Ms. Pratiksha Gupta</div>
                    </div>
                    {this.state.Proceed === 6 && (
                      <div className={styles.attendeeText}>
                        (PAYMENT DONE THROUGH DEBIT CARD)
                        <div>
                          Webinar link is sent on pratiksha.g@xelpmoc.in
                        </div>
                      </div>
                    )}
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
        heading: "Snow Bird Tickets",
        subHeading: "INR 1450 per person"
      },
      {
        heading: "Black Bird Tickets",
        subHeading: "INR 1450 per person",
        count: "Filling Fast!"
      }
    ]
  }
];
