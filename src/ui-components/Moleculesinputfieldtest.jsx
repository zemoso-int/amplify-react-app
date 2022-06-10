/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Moleculesinputfieldtest(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="300px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Moleculesinputfieldtest")}
    >
      <Flex
        gap="10px"
        direction="row"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        border="1px SOLID rgba(233,235,233,1)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "inputgroup")}
      >
        <Flex
          gap="10px"
          direction="row"
          height="48px"
          alignItems="flex-start"
          grow="1"
          basis="300px"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "input")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="12px"
            fontWeight="500"
            color="rgba(148,161,150,1)"
            lineHeight="16px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Enter your Location"
            {...getOverrideProps(overrides, "placeholder")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
