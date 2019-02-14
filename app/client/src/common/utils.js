/**
 * @flow
 */

function titleCase(str: string): string {
  return str[0].toUpperCase() + str.slice(1)
}

function titleConvert(str: string): string{
    var dict = {
                "templates": "选择简历模板",
                "profile": "你的个人信息",
                "education": "你的教育经历",
                "work": "你的工作经历",
                "skills": "你的职业技能",
                "projects": "你曾经做过的项目",
                "awards": "你的荣誉以及获奖经历"
               };

    return dict[str]
}

export { titleCase, titleConvert }
