import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageCircle, Layout, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Brain size={32} className="text-purple-500" />,
    title: '独一无二的性格养成',
    description: '基于 MBTI 深度融合，宠物的性格不再是随机的。它会根据你们的每一次对话、每一个互动实时演变，拥有E/I、S/N、T/F、J/P 八大动态维度。',
    color: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    icon: <MessageCircle size={32} className="text-blue-500" />,
    title: '懂你的 AI 智能对话',
    description: '告别机械式回复。设置你的身份（学生、打工族、自由派），灵绒会用最适合的语气与你交谈，陪你刷题、提醒摸鱼、守护灵感。',
    color: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    icon: <Layout size={32} className="text-green-500" />,
    title: '灵活的桌面形态',
    description: '全宠模式沉浸体验，轻宠模式不打扰工作，萌趣模式极简透明。无论你在做什么，灵绒都能找到最舒适的陪伴方式。',
    color: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    icon: <Sparkles size={32} className="text-orange-500" />,
    title: '极致的原生体验',
    description: 'macOS 风格磨砂毛玻璃特效，流畅的动画，完美融入你的桌面。丰富的养成系统：喂食、清洁、打工、睡眠，带来真实的成就感。',
    color: 'bg-orange-50 dark:bg-orange-900/20'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">核心亮点</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            不仅仅是功能，更是情感的连接。每一个设计细节，都为了更好的陪伴。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl ${feature.color} border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg`}
            >
              <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-xl inline-block shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
