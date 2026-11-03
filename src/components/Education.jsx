import { motion } from 'framer-motion'

const educationData = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Meerut International Institute of Technology',
    year: '2023 - 2025',
    description:
      'Completed my btech in Computer Science and Engineering and developing skills in software development and modern web technologies. Percentage: 65%',
  },
  {
    degree: 'Diploma',
    field: 'Electronics and Communication Engineering',
    institution: 'Sunder Deep Group of Institutions',
    year: '2019 - 2021',
    description:
      'Completed Diploma in Electronics and Communication Engineering with knowledge of electronics, communication systems, and technical fundamentals. Percentage: 76%',
  },
  {
    degree: 'Intermediate (12th)',
    field: 'Science',
    institution: 'Central Board of Secondary Education',
    year: '2018',
    description:
      'Completed intermediate education from the Central Board of Secondary Education.',
  },
  {
    degree: 'High School (10th)',
    field: 'Science',
    institution: 'Central Board of Secondary Education',
    year: '2016',
    description:
      'Completed high school education with 8.8 cgpa.',
  },
]

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Educational
          <span className="text-purple"> Background</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My academic journey so far
        </p>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">

          <div className="space-y-12">

            {educationData.map((data, index) => (
              <div
                key={index}
                className="relative pl-14"
              >

                {/* Purple vertical line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-purple"></div>
                {/* Purple circle */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple z-10"></div>

                {/* Card */}
                <div className="relative bg-dark-200 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300">

                  {/* Card top section */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

                    <div>
                      {/* Degree */}
                      <h3 className="text-xl font-bold text-white">
                        {data.degree}
                      </h3>

                      {/* Field */}
                      <p className="text-gray-400 mt-2">
                        {data.field}
                      </p>

                      {/* Institution */}
                      <p className="text-gray-400 mt-1">
                        {data.institution}
                      </p>
                    </div>

                    {/* Year */}
                    <span className="self-start px-4 py-2 bg-purple/20 text-purple rounded-full text-sm whitespace-nowrap">
                      {data.year}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {data.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </motion.section>
  )
}

export default Education