---
title: Team
layout: page
sidebar: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    //avatar: 'https://github.com/oddgeih-ntnu.png',
    avatar: 'https://backends.it.ntnu.no/user-profile-service/rest/files/8ec5302d-5836-37db-b9ac-942e6288d869',
    name: 'Oddgeir Lingaas Holmen',
    title: 'CEO',
    links: [
      { icon: 'github', link: 'https://github.com/oddgeih-ntnu' },
    ]
  },
  {
    //avatar: 'https://github.com/tommentnu.png',
    avatar: 'https://yt3.googleusercontent.com/ytc/AL5GRJWCXIGqWNDtr7y9pFGHrnH7KfBS_0s-DIKi3nxGyg=s88-c-k-c0x00ffffff-no-rj',
    name: 'Tom-Erik Røberg',
    title: 'CTO',
    links: [
      { icon: 'github', link: 'https://github.com/tommentnu' },
    ]
  },
  {
    avatar: 'https://github.com/matuskosut.png',
    name: 'Matus Kosut',
    title: 'Head of Product Development',
    links: [
      { icon: 'github', link: 'https://github.com/matuskosut' },
      //{ icon: 'twitter', link: 'https://twitter.com/matuskosut' }
    ]
  },
  {
    avatar: 'https://www.ntnu.no/documents/4941131/1323102351/user-profile-empty.svg',
    name: 'Qussay Qhazeia',
    title: 'Compliance Officer',
    //links: [
    //  { icon: 'github', link: 'https://github.com/JakubNTNU' },
    //]
  },
  {
    avatar: 'https://github.com/signe-cloud.png',
    name: 'Signe Elisabeth Åsberg',
    title: 'Research Advisor',
    links: [
      { icon: 'github', link: 'https://github.com/signe-cloud' },
    ]
  },
  {
    avatar: 'data:image/jpeg;base64,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',
    //avatar: 'https://github.com/JakubNTNU.png',
    name: 'Jakub Hudak',
    title: 'Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/JakubNTNU' },
    ]
  },
  {
    avatar: 'https://media.licdn.com/dms/image/D4D03AQGSQuBs7V3E1A/profile-displayphoto-shrink_800_800/0/1686077802255?e=2147483647&v=beta&t=7nxuIaMBqimkKiKX97dLuUC-HkixH7gNVEgFSbHU0M0',
    name: 'Ingunn Berg Ferstad',
    title: 'Communication',
    //links: []
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      Your experiences in HUNT Cloud are shaped and molded by a small team of scientific instrument makers located at NTNU, Norway.<br><br>Our team consist of five full time employees with a background from medicine, biology, management systems, signal processing and computer science. We collaborate closely on most of our activities, although for clarity, here is a short description of our main responsibility areas.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
