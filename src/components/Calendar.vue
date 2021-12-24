<template>
    <div class="calendar">
        <h1>
            <span style="color: #f5317f;">
                <HeartFilled />
            </span>
            恋爱已经
            <span style="color: #f5317f; font-size: 50px">
                {{ days_from_today() }}
            </span>
            天
        </h1>
    </div>
</template>

<script>
import { HeartFilled } from '@ant-design/icons-vue'

export default {
    name: "calendar",
    components: {
        HeartFilled
    },
    props: {
        startdate: Date
    },
    methods: {
        days_from_today() {
            const ONE_DAY = 1000 * 60 * 60 * 24
            var nowDate = new Date()
            const differenceMs = Math.abs(nowDate.valueOf() - this.startdate.valueOf())
            return Math.floor(differenceMs / ONE_DAY)
        },
    }
}
</script>
