<template>
    <div v-if="this.today_diff_days > this.target_diff_days">
        <p>
            {{ this.message }}
            已经
            <span style="color: #00a854;">
                {{ this.today_diff_days - this.target_diff_days }}
            </span>
            天
            <CheckCircleTwoTone twoToneColor="#00a854"/>
        </p>
    </div>
    <div v-if="this.target_diff_days == this.today_diff_days">
        <p>
            {{ this.message }}
            就是
            <span style="color: #f56a00;">
                今天
            </span>
            <HeartTwoTone twoToneColor="#f56a00"/>
        </p>
    </div>
    <div v-if="this.today_diff_days < this.target_diff_days">
        <p>
            {{ this.message }}
            还有
            <span style="color: #f5317f;">
                {{ this.target_diff_days - this.today_diff_days }}
            </span>
            天
            <LockTwoTone twoToneColor="#f5317f"/>
        </p>
    </div>
</template>

<script>
import { CheckCircleTwoTone, LockTwoTone, HeartTwoTone } from '@ant-design/icons-vue'

export default {
    name: "calendar",
    components: {
        CheckCircleTwoTone,
        LockTwoTone,
        HeartTwoTone
    },
    props: {
        message: String,
        startdate: Date,
        days: Number,
        years: Number,
    },
    target_date: undefined,
    target_diff_days: undefined,
    today_diff_days: undefined,
    created() {
        this.target_date = this.calc_target_date()
        this.target_diff_days = this.days_from(this.target_date)
        this.today_diff_days = this.days_from(new Date())
    },
    methods: {
        calc_target_date() {
            var target = new Date(this.startdate)
            target.setDate(target.getDate() + this.days)
            target.setFullYear(target.getFullYear() + this.years)
            return target
        },
        days_from(d) {
            const ONE_DAY = 1000 * 60 * 60 * 24
            var differenceMs = d.valueOf() - this.startdate.valueOf()
            return Math.floor(differenceMs / ONE_DAY)
        },
    }
}
</script>
