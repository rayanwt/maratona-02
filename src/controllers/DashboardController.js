const Job = require('../model/Job')
const JobUtils = require('../utils/JobUtils')
const Profile = require('../model/Profile')

module.exports = {
    async index(req, res) {
    
        const jobs = await Job.get();
        const profile = await Profile.get();

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }

        // Total de horas por dia de cada job em progresso
        let jobTotalHours = 0

            const updateJobs = jobs.map((job) => {
                // ajustes no job
                const remaining = JobUtils.remainingDays(job)
                const status = remaining <= 0 ? 'done' : 'progress'
        
                // Status = done
                // statusCount[done] += 1;
                // Somando a quantidade de status
                statusCount[status] += 1;

                // Total de horas por dia de cada job em progresso
                jobTotalHours = status == 'progress' ? jobTotalHours + Number(job['daily-hours']) : jobTotalHours

                /*if(status == 'progress'){
                    jobTotalHours += Number(job["daily-hours"])
                }
                */
               
                return {
                    ...job,
                    remaining,
                    status,
                    budget: JobUtils.calculateBudget(job, profile["value-hour"])
                }
            })
    
            // Qtd de horas que quero trabalhar dia (PROFILE)
            // MENOS
            // A quantidade de horas/dia de cada job em progress
            const freeHours = profile["hours-per-day"] - jobTotalHours;
        
            return res.render("index", { jobs: updateJobs, profile: profile, statusCount: statusCount, freeHours: freeHours})
        
    }
}