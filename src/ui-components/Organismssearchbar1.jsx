/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
import Atomsiconswork from "./Atomsiconswork";
import Atomsiconslocation from "./Atomsiconslocation";
import Atomsiconssearch from "./Atomsiconssearch";
export default function Organismssearchbar1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Organismssearchbar1")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="843px"
        height="56px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 19")}
      >
        <View
          width="843px"
          height="56px"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(247,247,247,1)"
          borderRadius="32px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 10")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="121px"
          height="24px"
          position="absolute"
          top="16px"
          left="24px"
          {...getOverrideProps(overrides, "Group 17")}
        >
          <Atomsiconswork
            display="flex"
            gap="8px"
            position="absolute"
            top="0px"
            left="0px"
            direction="row"
            justifyContent="center"
            alignItems="center"
            padding="4px 4px 4px 4px"
            {...getOverrideProps(overrides, "atoms/icons/work")}
          ></Atomsiconswork>
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="500"
            color="rgba(101,110,102,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="1px"
            left="32px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Search Skills"
            {...getOverrideProps(overrides, "Search Skills")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="94px"
          height="24px"
          position="absolute"
          top="16px"
          left="432px"
          {...getOverrideProps(overrides, "Group 18")}
        >
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
            fontWeight="500"
            color="rgba(101,110,102,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="1px"
            left="32px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Location"
            {...getOverrideProps(overrides, "Location")}
          ></Text>
        </View>
        <Icon
          width="0px"
          height="36px"
          viewBox={{ minX: 0, minY: 0, width: 1, height: 36 }}
          paths={[
            {
              d: "M-0.5 0L-0.5 36L0.5 36L0.5 0L-0.5 0Z",
              stroke: "rgba(214,214,214,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="10px"
          left="408px"
          {...getOverrideProps(overrides, "Vector 4")}
        ></Icon>
        <Icon
          width="44px"
          height="44px"
          viewBox={{ minX: 0, minY: 0, width: 44, height: 44 }}
          paths={[
            {
              d: "M44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22Z",
              fill: "rgba(48,161,147,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="6px"
          left="793px"
          {...getOverrideProps(overrides, "Ellipse 4")}
        ></Icon>
        <Atomsiconssearch
          display="flex"
          gap="10px"
          position="absolute"
          top="16px"
          left="803px"
          direction="row"
          justifyContent="center"
          alignItems="center"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/icons/search")}
        ></Atomsiconssearch>
      </Flex>
    </Flex>
  );
}
