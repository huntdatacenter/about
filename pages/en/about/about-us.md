---
title: About us
# layout: page
sidebar: false
pref: false
next: false
aside: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    //avatar: 'https://github.com/owhat',
    avatar: 'https://backends.it.ntnu.no/user-profile-service/rest/files/abcdfea3-303c-3992-80b7-068f12994142',
    name: 'Oddgeir Lingaas Holmen',
    title: 'Head of HUNT Cloud',
    links: [
      { icon: 'github', link: 'https://github.com/oddgeih-ntnu' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/oddgeir-lingaas-holmen/' },
    ]
  },
  {
    avatar: 'img/matus.png',
    name: 'Matus Kosut',
    title: 'CTO / Head of Product Development',
    links: [
      { icon: 'github', link: 'https://github.com/matuskosut' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/matuskosut/' },
    ]
  },
  {
    avatar: 'img/qussay.png',
    name: 'Qussay Ghazeia',
    title: 'Compliance Officer',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/qussay-ghazeia-168626142/' },
    ]
  },
  {
    avatar: 'img/jakub.png',
    //avatar: 'https://github.com/JakubNTNU.png',
    name: 'Jakub Hudak',
    title: 'Head of operations',
    links: [
      { icon: 'github', link: 'https://github.com/JakubNTNU' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/jakub-hudak-288b611a0/' },
    ]
  },
  {
    avatar: 'img/ingunn.png',
    name: 'Ingunn Berg Ferstad',
    title: 'Marketing Manager',
    links: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/ingunn-berg-ferstad/' },
    ]
  },
  {
    avatar: 'img/marvin.png',
    name: 'Marvin Muni',
    title: 'Senior DevOps Engineer',
    links: [
      { icon: 'linkedin', link: '' },
    ]
  },
  {
    avatar: 'img/keisuke.png',
    name: 'Keisuke Konno',
    title: 'Senior Security Engineer',
    links: [
      { icon: 'linkedin', link: '' },
    ]
  },
  {
    avatar: 'img/magda.png',
    name: 'Magdalena Duda',
    title: '?????',
    links: [
      { icon: 'linkedin', link: '' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      The HUNT Cloud team
    </template>
    <template #lead>
      Your experiences in HUNT Cloud are shaped by a small team of scientific instrument makers located at NTNU in Trondheim, Norway.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<strong>Our team consist of employees with a background from medicine, computer science, management systems, biology and art. We collaborate closely on most of our activities, although for clarity, here is a short description of our main responsibility areas.</strong>

<style scoped>
.VPTeamPage {
  margin-top: 0px !important;
  margin-left: -120px !important;
  margin-right: auto !important;
  width: 960px !important;
  display: block;
}

:deep(.VPTeamMembers) {
  max-width: 1200px !important;
  margin: 0 auto !important;
}

:deep(.VPTeamMembers .container) {
  display: grid !important;
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 30px !important;
  max-width: 100% !important;
  margin: 0 auto !important;
  padding: 0 !important;
}

:deep(.VPTeamMembersItem) {
  background: #f1eef0ff !important;
  border-radius: 15px;
  padding: 40px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
  min-height: 100% !important;
}

:deep(.VPTeamMembersItem .profile) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  width: 100% !important;
  background: transparent !important;
  box-shadow: none !important;
  padding: 0 !important;
}

:deep(.VPTeamMembersItem .avatar) {
  width: 200px !important;
  height: 200px !important;
  margin: 0 auto !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.VPTeamMembersItem .avatar img) {
  width: 200px !important;
  height: 200px !important;
  object-fit: cover !important;
  display: block !important;
  border-radius: 50% !important;
  margin: 0 !important;
  padding: 0 !important;
}

@media (max-width: 719px) {
  :deep(.VPTeamMembers .container) {
    grid-template-columns: 1fr !important;
  }
}

:deep(.VPTeamMembersItem) {
  background: #f1eef0ff !important;
  border-radius: 15px;
  padding: 40px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: flex-start !important;
  min-height: 100% !important;
  cursor: pointer !important;
  transition: transform 0.2s, box-shadow 0.2s !important;
  position: relative !important;
}

:deep(.VPTeamMembersItem:hover) {
  transform: translateY(-5px) !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
}

/* Keep social links clickable above the card link */
:deep(.VPTeamMembersItem .links) {
  position: relative !important;
  z-index: 2 !important;
}

</style>
