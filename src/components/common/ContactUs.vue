<script lang="ts" setup>
import { library as faLibrary } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faPhone,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
faLibrary.add(faEnvelope, faPhone, faFileAlt);
</script>

<template>
  <!-- call to action -->
  <section class="sb-call-to-action">
    <div class="sb-bg-3"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="sb-cta-text">
            <h2 class="sb-mb-30">
              {{ $t("page_content.home.contact.title") }}
            </h2>
            <p class="sb-text sb-mb-30">
              {{ $t("page_content.home.contact.description[0]") }}<br />
              {{ $t("page_content.home.contact.description[1]") }}
            </p>
            <p class="sb-text sb-mb-30">
              <FontAwesomeIcon
                :icon="['fas', 'envelope']"
                style="width: 1.5rem"
              />
              {{ $t("page_content.home.contact.email") }}
              <a href="mailto:mealdatabase24@ntu.edu.tw" data-no-swup
                >mealdatabase24@ntu.edu.tw </a
              ><br />
              <FontAwesomeIcon
                :icon="['fas', 'phone']"
                style="width: 1.5rem"
              />
              {{ $t("page_content.home.contact.phone") }}
              02-3366-5705<br />
              <FontAwesomeIcon
                :icon="['fas', 'file-alt']"
                style="width: 1.5rem"
              />
              {{ $t("page_content.home.contact.form") }}<br />
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="sb-illustration-3">
            <a href="https://forms.gle/bbyyYU81HH82zgZt8" target="_blank">
              <img
                src="@/assets/images/QR-CODE.png"
                alt="QR Code"
                class="sb-phones"
              />
            </a>
            <div class="sb-cirkle-1"/>
            <div class="sb-cirkle-2"/>
            <div class="sb-cirkle-3"/>
            <div class="sb-cirkle-4"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- call to action end -->
</template>

<style scoped></style>
