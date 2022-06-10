/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Atomslogoola from "./Atomslogoola";
import { Flex, Text } from "@aws-amplify/ui-react";
import Atomsiconsrupee from "./Atomsiconsrupee";
export default function Moleculeslist(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="116px"
      direction="row"
      width="359px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="8px 8px 8px 8px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Moleculeslist")}
    >
      <Flex
        gap="4px"
        direction="row"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        height="44px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 38")}
      >
        <Atomslogoola
          display="flex"
          gap="10px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "atoms/logo/ola")}
        ></Atomslogoola>
        <Flex
          gap="4px"
          direction="column"
          justifyContent="center"
          shrink="0"
          height="44px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 37")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 36")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="700"
              color="rgba(55,60,56,1)"
              lineHeight="16px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="133px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Ola"
              {...getOverrideProps(overrides, "Ola")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 35")}
          >
            <Text
              fontFamily="Montserrat"
              fontSize="12px"
              fontWeight="500"
              color="rgba(101,110,102,1)"
              lineHeight="16px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="91px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Approximately"
              {...getOverrideProps(overrides, "Approximately")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="35px"
              height="24px"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group 57")}
            >
              <Text
                fontFamily="Montserrat"
                fontSize="12px"
                fontWeight="500"
                color="rgba(55,60,56,1)"
                lineHeight="16px"
                textAlign="left"
                display="flex"
                direction="column"
                justifyContent="flex-start"
                position="absolute"
                top="4px"
                left="20px"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="45"
                {...getOverrideProps(overrides, "45")}
              ></Text>
              <Atomsiconsrupee
                display="flex"
                gap="10px"
                position="absolute"
                top="0px"
                left="0px"
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding="7px 7px 7px 7px"
                {...getOverrideProps(overrides, "atoms/icons/rupee")}
              ></Atomsiconsrupee>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Text
        fontFamily="Montserrat"
        fontSize="12px"
        fontWeight="700"
        color="rgba(48,161,147,1)"
        lineHeight="16px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Book Now"
        {...getOverrideProps(overrides, "Book Now")}
      ></Text>
    </Flex>
  );
}
