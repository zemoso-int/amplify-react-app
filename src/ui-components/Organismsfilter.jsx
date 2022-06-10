/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import Moleculesiconwlabel from "./Moleculesiconwlabel";
export default function Organismsfilter(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="7px 21.5px 7px 21.5px"
      {...rest}
      {...getOverrideProps(overrides, "Organismsfilter")}
    >
      <Flex
        padding="0px 0px 0px 0px"
        width="97px"
        height="146px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Group 79")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="64px"
          height="22px"
          position="absolute"
          top="0px"
          left="0px"
          {...getOverrideProps(overrides, "Group 45")}
        >
          <Text
            fontFamily="Montserrat"
            fontSize="14px"
            fontWeight="600"
            color="rgba(55,60,56,1)"
            lineHeight="22px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Distance"
            {...getOverrideProps(overrides, "Distance")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="97px"
          height="112px"
          position="absolute"
          top="34px"
          left="0px"
          {...getOverrideProps(overrides, "Group 78")}
        >
          <Moleculesiconwlabel
            display="flex"
            gap="8px"
            position="absolute"
            top="0px"
            left="0px"
            direction="row"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "molecules/icon w label1073804")}
          ></Moleculesiconwlabel>
          <Moleculesiconwlabel
            display="flex"
            gap="8px"
            position="absolute"
            top="30px"
            left="0px"
            direction="row"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "molecules/icon w label1073810")}
          ></Moleculesiconwlabel>
          <Moleculesiconwlabel
            display="flex"
            gap="8px"
            position="absolute"
            top="60px"
            left="0px"
            direction="row"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "molecules/icon w label1073816")}
          ></Moleculesiconwlabel>
          <Moleculesiconwlabel
            display="flex"
            gap="8px"
            position="absolute"
            top="90px"
            left="0px"
            direction="row"
            alignItems="center"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "molecules/icon w label1073822")}
          ></Moleculesiconwlabel>
        </View>
      </Flex>
    </Flex>
  );
}
