import React from "react";
import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";

export const OrderStatus = () => {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          {/* <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <RecommendOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Order Confirmed
            </Typography>
            <Typography>Your order has been Confirmed</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          {/* <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent> */}
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LocalShippingOutlinedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Shipped
            </Typography>
            <Typography>Your order has been Shipped</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <EventAvailableOutlinedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Delivered
            </Typography>
            <Typography>Your order has been Delivered</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <RepeatIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem> */}
      </Timeline>
    </>
  );
};
