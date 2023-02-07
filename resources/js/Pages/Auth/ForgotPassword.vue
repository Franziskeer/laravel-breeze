<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/Breeze/InputError.vue";
import InputLabel from "@/Components/Breeze/InputLabel.vue";
import PrimaryButton from "@/Components/Breeze/PrimaryButton.vue";
import TextInput from "@/Components/Breeze/TextInput.vue";
import { Head, useForm } from "@inertiajs/vue3";

defineProps({
	status: String,
});

const form = useForm({
	email: "",
});

const submit = () => {
	form.post(route("password.email"));
};
</script>

<template>
	<GuestLayout>
		<Head title="Recuperar contraseña" />

		<div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
			¿Olvidó su contraseña? No hay problema. Simplemente déjenos saber su dirección de correo electrónico y le enviaremos un enlace para restablecer la contraseña que le
			permitirá elegir una nueva.
		</div>

		<div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
			{{ status }}
		</div>

		<form @submit.prevent="submit">
			<div>
				<InputLabel for="email" value="Correo electrónico" />

				<TextInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />

				<InputError class="mt-2" :message="form.errors.email" />
			</div>

			<div class="flex items-center justify-end mt-4">
				<PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Enviar enlace </PrimaryButton>
			</div>
		</form>
	</GuestLayout>
</template>
