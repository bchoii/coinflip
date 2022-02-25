<template>
  <CThemeProvider>
    <CReset />
    <c-box> Test Site for CoinFlip, using Chakra UI. </c-box>
    <c-box bg="tomato" w="100%" p="4" color="white"> This is the Box </c-box>
  </CThemeProvider>
</template>

<script lang="js">
import { CBox, CButton } from '@chakra-ui/vue'
import { CThemeProvider, CReset } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CButton
  }
}
</script>
