const { exec } = require("child_process");
const util = require("util");
const execAsync = util.promisify(exec);

const commitDateList = [
    
// "2023/1/17 00:30:10",
// "2023/1/18 02:30:10",
// "2023/1/18 03:30:10",
// "2023/1/19 06:30:10",
// "2023/1/20 05:30:10",
// "2023/1/23 04:30:10",
// "2023/1/24 09:30:10",
// "2023/1/26 08:30:10",
// "2023/1/26 07:30:10",
// "2023/2/2 00:30:10",
// "2023/2/2 01:30:10",
// "2023/2/6 02:30:10",
// "2023/2/7 00:30:10",
// "2023/2/8 02:30:10",
// "2023/2/10 03:30:10",
// "2023/2/15 06:30:10",
// "2023/2//15 06:30:10",

// "2023/3/1 00:30:10",
// "2023/3/1 02:30:10",
// "2023/3/2 03:30:10",
// "2023/3/2 06:30:10",
// "2023/3/3 05:30:10",
// "2023/3/6 04:30:10",
// "2023/3/6 09:30:10",
// "2023/3/7 08:30:10",
// "2023/3/8 07:30:10",
// "2023/3/6 00:30:10",
// "2023/3/9 01:30:10",
// "2023/3/9 02:30:10",
// "2023/3/9 00:30:10",
// "2023/3/9 02:30:10",
// "2023/3/10 03:30:10",
// "2023/3/13 06:30:10",
// "2023/3//14 06:30:10",

// "2023/4/4 00:30:10",
// "2023/4/4 01:30:10",
// "2023/4/6 02:30:10",
// "2023/4/7 00:30:10",
// "2023/4/7 02:30:10",
// "2023/4/11 03:30:10",
// "2023/4/14 06:30:10",
// "2023/4//14 06:30:10",
    "2021/2/4 00:30:10",
    "2021/2/28 02:30:10",
    "2021/2/28 03:30:10",
    "2021/2/28 06:30:10",
    "2021/2/28 05:30:10",
    "2021/3/30 04:30:10",
    "2021/3/19 09:30:10",
    "2021/3/19 08:30:10",
    "2021/4/19 07:30:10",
    "2021/4/19 00:30:10",
    "2021/5/2 01:30:10",
    "2021/5/5 02:30:10",
    "2021/5/5 00:30:10",
    "2021/5/5 02:30:10",
    "2021/6/4 00:30:10",
    "2021/6/28 02:30:10",
    "2021/6/28 03:30:10",
    "2021/6/28 06:30:10",
    "2021/6/28 05:30:10",
    "2021/7/30 04:30:10",
    "2021/9/19 09:30:10",
    "2021/9/19 08:30:10",
    "2021/9/19 07:30:10",
    "2021/9/19 00:30:10",
    "2021/10/2 01:30:10",
    "2021/10/5 02:30:10",
    "2021/10/5 00:30:10",
    "2021/12/5 02:30:10",
    "2021/12/5 03:30:10",
    "2021/12/5 06:30:10",
    "2021/12/5 06:30:10",
]

async function ok() {
    for (const date of commitDateList) {
        await execAsync(`echo "${date}" > foo.txt`);
        await execAsync(`git add .`);
        await execAsync(`git commit --quiet --date "${date}" -m "fake commit"`);
    }
}

ok();
// async function ok1() {
//     await execAsync(`git branch -M main`);
//     await execAsync(`git push -u origin main`);
// }
// ok1()

// "2018/6/4 00:30:10",
// "2018/6/28 02:30:10",
// "2018/6/28 03:30:10",
// "2018/6/28 06:30:10",
// "2018/6/28 05:30:10",
// "2018/7/30 04:30:10",
// "2018/9/19 09:30:10",
// "2018/9/19 08:30:10",
// "2018/9/19 07:30:10",
// "2018/9/19 00:30:10",
// "2018/10/2 01:30:10",
// "2018/10/5 02:30:10",
// "2018/10/5 00:30:10",
// "2018/12/5 02:30:10",
// "2018/12/5 03:30:10",
// "2018/12/5 06:30:10",
// "2018/12/5 06:30:10",
    // "2019/2/4 00:30:10",
    // "2019/2/28 02:30:10",
    // "2019/2/28 03:30:10",
    // "2019/2/28 06:30:10",
    // "2019/2/28 05:30:10",
    // "2019/3/30 04:30:10",
    // "2019/3/19 09:30:10",
    // "2019/3/19 08:30:10",
    // "2019/4/19 07:30:10",
    // "2019/4/19 00:30:10",
    // "2019/5/2 01:30:10",
    // "2019/5/5 02:30:10",
    // "2019/5/5 00:30:10",
    // "2019/5/5 02:30:10",
    // "2019/6/4 00:30:10",
    // "2019/6/28 02:30:10",
    // "2019/6/28 03:30:10",
    // "2019/6/28 06:30:10",
    // "2019/6/28 05:30:10",
    // "2019/7/30 04:30:10",
    // "2019/9/19 09:30:10",
    // "2019/9/19 08:30:10",
    // "2019/9/19 07:30:10",
    // "2019/9/19 00:30:10",
    // "2019/10/2 01:30:10",
    // "2019/10/5 02:30:10",
    // "2019/10/5 00:30:10",
    // "2019/12/5 02:30:10",
    // "2019/12/5 03:30:10",
    // "2019/12/5 06:30:10",
    // "2019/12/5 06:30:10",
    // "2020/2/4 00:30:10",
    // "2020/2/28 02:30:10",
    // "2020/2/28 03:30:10",
    // "2020/2/28 06:30:10",
    // "2020/2/28 05:30:10",
    // "2020/3/30 04:30:10",
    // "2020/3/19 09:30:10",
    // "2020/3/19 08:30:10",
    // "2020/4/19 07:30:10",
    // "2020/4/19 00:30:10",
    // "2020/5/2 01:30:10",
    // "2020/5/5 02:30:10",
    // "2020/5/5 00:30:10",
    // "2020/5/5 02:30:10",
    // "2020/6/4 00:30:10",
    // "2020/6/28 02:30:10",
    // "2020/6/28 03:30:10",
    // "2020/6/28 06:30:10",
    // "2020/6/28 05:30:10",
    // "2020/7/30 04:30:10",
    // "2020/9/19 09:30:10",
    // "2020/9/19 08:30:10",
    // "2020/9/19 07:30:10",
    // "2020/9/19 00:30:10",
    // "2020/10/2 01:30:10",
    // "2020/10/5 02:30:10",
    // "2020/10/5 00:30:10",
    // "2020/12/5 02:30:10",
    // "2020/12/5 03:30:10",
    // "2020/12/5 06:30:10",
    // "2020/12/5 06:30:10",
    // "2021/2/4 00:30:10",
    // "2021/2/28 02:30:10",
    // "2021/2/28 03:30:10",
    // "2021/2/28 06:30:10",
    // "2021/2/28 05:30:10",
    // "2021/3/30 04:30:10",
    // "2021/3/19 09:30:10",
    // "2021/3/19 08:30:10",
    // "2021/4/19 07:30:10",
    // "2021/4/19 00:30:10",
    // "2021/5/2 01:30:10",
    // "2021/5/5 02:30:10",
    // "2021/5/5 00:30:10",
    // "2021/5/5 02:30:10",
    // "2021/6/4 00:30:10",
    // "2021/6/28 02:30:10",
    // "2021/6/28 03:30:10",
    // "2021/6/28 06:30:10",
    // "2021/6/28 05:30:10",
    // "2021/7/30 04:30:10",
    // "2021/9/19 09:30:10",
    // "2021/9/19 08:30:10",
    // "2021/9/19 07:30:10",
    // "2021/9/19 00:30:10",
    // "2021/10/2 01:30:10",
    // "2021/10/5 02:30:10",
    // "2021/10/5 00:30:10",
    // "2021/12/5 02:30:10",
    // "2021/12/5 03:30:10",
    // "2021/12/5 06:30:10",
    // "2021/12/5 06:30:10",
    // "2022/2/4 00:30:10",
    // "2022/2/28 02:30:10",
    // "2022/2/28 03:30:10",
    // "2022/2/28 06:30:10",
    // "2022/2/28 05:30:10",
    // "2022/3/30 04:30:10",
    // "2022/3/19 09:30:10",
    // "2022/3/19 08:30:10",
    // "2022/4/19 07:30:10",
    // "2022/4/19 00:30:10",
    // "2022/5/2 01:30:10",
    // "2022/5/5 02:30:10",
    // "2022/5/5 00:30:10",
    // "2022/5/5 02:30:10",
    // "2022/6/4 00:30:10",
    // "2022/6/28 02:30:10",
    // "2022/6/28 03:30:10",
    // "2022/6/28 06:30:10",
    // "2022/6/28 05:30:10",
    // "2022/7/30 04:30:10",
    // "2022/9/19 09:30:10",
    // "2022/9/19 08:30:10",
    // "2022/9/19 07:30:10",
    // "2022/9/19 00:30:10",
    // "2022/10/2 01:30:10",
    // "2022/10/5 02:30:10",
    // "2022/10/5 00:30:10",
    // "2022/12/5 02:30:10",
    // "2022/12/5 03:30:10",
    // "2022/12/5 06:30:10",
    // "2022/12/5 06:30:10",

    // "2022/2/7 00:30:10",
    // "2022/2/17 02:30:10",
    // "2022/2/17 03:30:10",
    // "2022/2/17 06:30:10",
    // "2022/2/17 05:30:10",
    // "2022/3/14 04:30:10",
    // "2022/3/25 09:30:10",
    // "2022/3/25 08:30:10",
    // "2022/4/25 07:30:10",
    // "2022/4/25 00:30:10",
    // "2022/5/8 01:30:10",
    // "2022/5/15 02:30:10",
    // "2022/5/15 00:30:10",
    // "2022/5/15 02:30:10",
    // "2022/6/14 00:30:10",
    // "2022/6/21 02:30:10",
    // "2022/6/21 03:30:10",
    // "2022/6/21 06:30:10",
    // "2022/6/21 05:30:10",
    // "2022/7/20 04:30:10",
    // "2022/9/9 09:30:10",
    // "2022/9/9 08:30:10",
    // "2022/9/9 07:30:10",
    // "2022/9/9 00:30:10",
    // "2022/10/4 01:30:10",
    // "2022/10/15 02:30:10",
    // "2022/10/15 00:30:10",
    // "2022/12/15 02:30:10",
    // "2022/12/15 03:30:10",
    // "2022/12/15 06:30:10",
    // "2022/12/15 06:30:10",

