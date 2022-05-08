<template>
  <div>
  <el-dropdown trigger="click" size="medium"
      @command="handleSetLanguage"
>
    <div>
      <svg-icon
        name="language"
        class="international-icon"
      />
    </div>
    <el-dropdown-menu>
        <el-dropdown-item
          :disabled="language==='zh'"
          command="zh"
        >
          中文
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='en'"
          command="en"
        >
          English
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='es'"
          command="es"
        >
          Español
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='ja'"
          command="ja"
        >
          日本語
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='ko'"
          command="ko"
        >
          한국어
        </el-dropdown-item>
        <el-dropdown-item
          :disabled="language==='it'"
          command="it"
        >
          Italiano
        </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
  </div>
</template>

<script lang="ts">
import { AppModule } from '@/store/modules/app'

let language=AppModule.language

const handleSetLanguage = (lang: string) => {
  this.$i18n.locale=lang
  AppModule.SetLanguage(lang)
      document.documentElement.lang = lang
      const title = this.$route.meta.title ? "english":"korean" //`${this.$t(`route.${this.$route.meta.title}`)} - ${settings.title}` : `${settings.title}`
      document.title = title
      this.$message({
        message: "Language change success", //this.$t('components.changeLanguageTips').toString(),
        type: 'success'
      })
}

/*   function handleSetLanguage(lang: string) {
    this.$i18n.locale = lang
    AppModule.SetLanguage(lang)
    document.documentElement.lang = lang
    const title = this.$route.meta.title ? `${this.$t(`route.${this.$route.meta.title}`)} - ${settings.title}` : `${settings.title}`
    document.title = title
    this.$message({
      message: this.$t('components.changeLanguageTips').toString(),
      type: 'success'
    })
}*/

</script>
