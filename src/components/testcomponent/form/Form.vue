<template>
    <div class="container mt-3">
        <Header />
        <div class="row">
            <div class="col-12 mb-4">
                <progress-bar :percentage="percentage"/>
            </div>
            <div class="col-12 col-md-4">
                <form @submit.prevent="createProject">
                    <div class="mb-3 text-start">
                        <div class="inputHeaders">
                            <label class="form-label">Project</label>
                            <span class="remaingChars">{{charactersLeft}} Characters Left</span>
                        </div>
                        <input 
                            v-model.trim="project" 
                            type="text" 
                            class="form-control" 
                            placeholder="Name"
                            required
                            maxlength="30"
                        >
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-label">Activity</label>
                        <select class="form-select" required v-model="type">
                            <option disabled selected value="">Select an opction</option>
                            <option value="1">Create a React UI</option>
                            <option value="2">Implement a Svelt component</option>
                            <option value="3">Create a backend with NodeJS</option>
                            <option value="4">Create a script with Python</option>
                            <option value="5">Create a RDS database</option>
                        </select>
                    </div>
                    <div class="mb-3 text-start">
                        <label class="form-check-label mx-1">Urgent</label>
                        <input v-model="urgent" type="checkbox" class="form-check-input">
                    </div>
                    <div class="text-start">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-2 col-md-8">
                <projects-table 
                    :totalprojects="totalProjects" 
                    :projects="projects" 
                    :updateStatus="updateStatus"
                    :cleanProjects="cleanProjects"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import ProgressBar from './ProgressBar.vue';
import ProjectsTable from './ProjectsTable.vue';
export default {
    data: () => ({
        project: '',
        type: '',
        urgent: false,
        projects: [],
    }),
    components: {
        Header,
        ProgressBar,
        ProjectsTable
    },
    methods: {
        createProject() {
            const project = {
                project: this.project,
                type: this.type,
                urgent: this.urgent,
                completed: false,
            };

            this.projects.push(project);
            this.storeData();

            this.project = '';
            this.type = '';
            this.urgent = false;
        },
        updateStatus(idx, key) {
            this.projects[idx][key] = !this.projects[idx][key];
            this.storeData();
        },
        storeData() {
            localStorage.setItem(
                'projects',
                JSON.stringify(this.projects),
            );
        },
        cleanProjects() {
            localStorage.removeItem('projects');
            this.projects = [];
        }
    },
    computed: {
        totalProjects() {
            return this.projects.length;
        },
        percentage() {
            const completedProjects = this.projects.reduce((total, current) => {
                total += current.completed ? 1 : 0;
                return total;
            }, 0);
            return (completedProjects * 100) / this.totalProjects || 0;
        },
        charactersLeft() {
            return 30 - this.project.length;
        }
    },
    mounted() {
        // const storedProjects = localStorage.getItem('projects') || '[]';
        this.projects = JSON.parse(localStorage.getItem('projects')) || [];
    }
}
</script>

<style scoped>
.inputHeaders {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.remaingChars {
  font-size: 12px;
  color: #8c8c8c;
}
</style>