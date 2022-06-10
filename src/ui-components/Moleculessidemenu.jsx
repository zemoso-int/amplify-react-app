/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text } from "@aws-amplify/ui-react";
import Atomssidemenudashboard from "./Atomssidemenudashboard";
export default function Moleculessidemenu(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="4px 4px 4px 4px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculessidemenu")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="40px"
        height="40px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "icon container")}
      >
        <Icon
          width="40px"
          height="40px"
          viewBox={{ minX: 0, minY: 0, width: 40, height: 40 }}
          paths={[
            {
              d: "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z",
              fill: "rgba(232,255,252,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <Atomssidemenudashboard
          display="flex"
          gap="10px"
          position="absolute"
          top="8px"
          left="8px"
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="3px 3px 3px 3px"
          {...getOverrideProps(overrides, "atoms/sidemenu/dashboard")}
        ></Atomssidemenudashboard>
      </Flex>
      <Text
        fontFamily="Montserrat"
        fontSize="14px"
        fontWeight="500"
        color="rgba(55,60,56,1)"
        lineHeight="22px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dashboard"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </Flex>
  );
}
