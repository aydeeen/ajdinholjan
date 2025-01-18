import React from 'react'
import ContentRenderer from '@/components/ContentRenderer'
import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

const History = ({ title, list }) => (
  <>
    <h3>{title}</h3>
    <Reveal
      animation="fade-in scale-x"
      className="h-1.5 bg-gradient-to-r from-black via-beta to-alpha"
    />
    <div className="mt-6 flex flex-col md:mt-12">
      {list?.map((item, i) => (
        <React.Fragment key={`item-${i}`}>
          <div className="flex" key={`item-${i}`}>
            <div>
              <h6 className="pr-1 font-medium">{item.name}</h6>
              <div>{item.description}</div>
            </div>
            <small className="ml-auto shrink-0 opacity-60">{item.date}</small>
          </div>
          <hr className="my-6" />
        </React.Fragment>
      ))}
    </div>
  </>
)

const Skill = ({ title, icon }) => (
  <div className="flex items-center">
    {icon && (
      <Icon width={28} height={28} {...icon} className="mr-3 h-7 w-7 text-omega-500" />
    )}
    <small className="font-bold">{title}</small>
  </div>
)

const SkillSet = ({ title, list }) => (
  <div className="bg-gradient-omega-900 p-6 md:px-12 md:py-8">
    <p className="col-span-3 mt-0 mb-6 self-center border-l-2 border-alpha pl-3 text-white">
      {title}
    </p>
    <div className="grid grid-cols-fluid gap-6 [--tw-fluid-col-min:7.5rem]">
      {list?.map((props, j) => (
        <Reveal key={j} animation="fade-in" delay={j * 200}>
          <Skill {...props} />
        </Reveal>
      ))}
    </div>
  </div>
)

const Layout = ({ personal_info = {}, skills_header, skills, history }) => {
  return (
    <div className="mx-auto">
      <div className="prose prose-invert md:flex">
        <div>
          {skills_header && (
            <div className="p-6 md:p-12">
              <h3 className="mb-2">{skills_header.title}</h3>
              {skills_header.list && (
                <h3 className="inline">
                  <Typewriter lines={skills_header.list} lineClassName="text-gradient-500" />
                </h3>
              )}
            </div>
          )}
          {skills && (
            <div className="grid grid-cols-1 items-start divide-y divide-omega-700 shadow-xl">
              {skills.map((props, i) => (
                <SkillSet key={i} {...props} />
              ))}
            </div>
          )}
          <Reveal animation="fade-in slide-in-top" className="prose p-6 dark:prose-invert md:p-12">
            <ContentRenderer source={personal_info} />
          </Reveal>
        </div>
      </div>
      {history && (
        <div className="prose flex-wrap justify-between bg-white p-6 md:flex">
          {history.map((props, i) => (
            <div key={i} className="flex-1 md:p-12">
              <History {...props} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Layout
