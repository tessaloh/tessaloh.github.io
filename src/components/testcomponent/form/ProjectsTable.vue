<template>
    <div class="row my-3">
        <div class="col-6 text-start">
            <h3>Total Projects {{ totalProjects }}</h3>
        </div>
        <div class="col-6 text-end">
            <button @click="cleanProjects" class="btn btn-warning">Remove Projects</button>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Type</th>
                    <th>Urgent</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project, index) in projects" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ project.project }}</td>
                    <td>{{ project.type }}</td>
                    <td @click="updateStatus(index, 'urgent')" :class="project.urgent ? 'bg-success' : 'bg-danger'">
                        {{ project.urgent ? 'Yes' : 'Not' }}
                    </td>
                    <td @click="updateStatus(index, 'completed')"
                        :class="project.completed ? 'bg-success' : 'bg-danger'">
                        {{ project.completed ? 'Yes' : 'Not' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:[
        "totalProjects",
        "projects",
        "updateStatus",
        "cleanProjects"
    ]
}
</script>
