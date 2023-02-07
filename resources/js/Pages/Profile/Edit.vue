<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import DeleteUserForm from "./Partials/DeleteUserForm.vue";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm.vue";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm.vue";
import Card from "@/Components/Custom/Card.vue";

defineProps({
	mustVerifyEmail: Boolean,
	status: String,
});
</script>

<template>
	<AuthenticatedLayout title="Perfil">
		<template #header>
			<h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Perfil</h2>
		</template>

		<Card class="grid-responsive-span">
			<UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
		</Card>

		<Card class="grid-responsive-span">
			<UpdatePasswordForm />
		</Card>

		<!-- <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <DeleteUserForm class="max-w-xl" />
        </div> -->
	</AuthenticatedLayout>
</template>
