/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Atomsiconsnotifications from "./Atomsiconsnotifications";
import Atomsiconsmessage from "./Atomsiconsmessage";
import Atomsiconslocation from "./Atomsiconslocation";
import Atomslogo from "./Atomslogo";
export default function Organismsheader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1366px"
      height="80px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Organismsheader")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1366px"
        height="80px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 92")}
      >
        <View
          width="1366px"
          height="80px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(11,109,98,1)"
          {...getOverrideProps(overrides, "Rectangle 6")}
        ></View>
        <Flex
          gap="6px"
          position="absolute"
          top="22px"
          left="40px"
          direction="row"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/logo301083")}
        ></Flex>
        <Icon
          width="36px"
          height="36px"
          viewBox={{ minX: 0, minY: 0, width: 36, height: 36 }}
          paths={[
            {
              d: "M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="22px"
          left="1290px"
          {...getOverrideProps(overrides, "Ellipse 3")}
        ></Icon>
        <Atomsiconsnotifications
          display="flex"
          gap="10px"
          position="absolute"
          top="28px"
          left="1240px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding="0px 1px 0px 1px"
          {...getOverrideProps(overrides, "atoms/icons/notifications")}
        ></Atomsiconsnotifications>
        <Atomsiconsmessage
          display="flex"
          gap="10px"
          position="absolute"
          top="28px"
          left="1192px"
          direction="column"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/message")}
        ></Atomsiconsmessage>
        <View
          padding="0px 0px 0px 0px"
          width="340px"
          height="28px"
          position="absolute"
          top="26px"
          left="378px"
          {...getOverrideProps(overrides, "Group 16")}
        >
          <Icon
            width="340px"
            height="0px"
            viewBox={{ minX: 0, minY: 0, width: 340, height: 1 }}
            paths={[
              {
                d: "M0 0.5L340 0.5L340 -0.5L0 -0.5L0 0.5Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            position="absolute"
            top="28px"
            left="0px"
            {...getOverrideProps(overrides, "Vector 3")}
          ></Icon>
          <Atomsiconslocation
            display="flex"
            gap="10px"
            position="absolute"
            top="0px"
            left="0px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="3px 3px 3px 3px"
            property1="icons"
            property2="location"
            {...getOverrideProps(overrides, "atoms/icons/location")}
          ></Atomsiconslocation>
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="2px"
            left="37px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="East Marredpally, Secunderabad"
            {...getOverrideProps(overrides, "Label")}
          ></Text>
        </View>
      </View>
      <Flex
        gap="6px"
        position="absolute"
        top="22px"
        left="40px"
        direction="row"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/logo1803812")}
      ></Flex>
      <Atomslogo
        display="flex"
        gap="4px"
        position="absolute"
        top="24px"
        left="40px"
        direction="row"
        alignItems="center"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "atoms/logo1863303")}
      ></Atomslogo>
    </View>
  );
}
